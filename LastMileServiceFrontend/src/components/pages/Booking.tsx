import { useState } from "react";
import { Calendar as CalendarIcon, Check, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BookingProps {
  data: any;
  onNavigate: (page: string) => void;
}

export function Booking({ data, onNavigate }: BookingProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    { id: "basic", name: "Basic Service", price: 85, duration: "1-2 hours" },
    { id: "standard", name: "Standard Service", price: 150, duration: "2-4 hours" },
    { id: "premium", name: "Premium Service", price: 250, duration: "4-6 hours" },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="mb-4">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Your service has been booked successfully. You will receive a confirmation email
            shortly with all the details.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
            <div className="flex items-center space-x-3 mb-3">
              <ImageWithFallback
                src={data.image}
                alt={data.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p>{data.name}</p>
                <p className="text-sm text-muted-foreground">{data.profession}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>{selectedDate?.toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span>{services.find((s) => s.id === selectedService)?.name}</span>
              </div>
            </div>
          </div>
          <Button onClick={() => onNavigate("home")} className="w-full">
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="mb-8">Book Service</h1>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step >= s
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 sm:w-20 h-1 mx-2 transition-colors ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-8 sm:space-x-16 mt-2 text-sm">
            <span className={step >= 1 ? "text-primary" : "text-muted-foreground"}>
              Select Service
            </span>
            <span className={step >= 2 ? "text-primary" : "text-muted-foreground"}>
              Choose Date
            </span>
            <span className={step >= 3 ? "text-primary" : "text-muted-foreground"}>
              Confirm
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <Card className="p-6">
                <h2 className="mb-6">Select a Service</h2>
                <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        htmlFor={service.id}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          selectedService === service.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value={service.id} id={service.id} />
                          <div>
                            <p>{service.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Duration: {service.duration}
                            </p>
                          </div>
                        </div>
                        <span className="text-primary">${service.price}</span>
                      </label>
                    ))}
                  </div>
                </RadioGroup>
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="w-full mt-6"
                  size="lg"
                >
                  Continue
                </Button>
              </Card>
            )}

            {/* Step 2: Choose Date & Time */}
            {step === 2 && (
              <Card className="p-6">
                <h2 className="mb-6">Choose Date & Time</h2>
                
                <div className="mb-6">
                  <Label className="mb-3 block">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          selectedDate.toLocaleDateString()
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="mb-6">
                  <Label className="mb-3 block">Select Time</Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="h-12"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="notes" className="mb-3 block">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific requirements or details..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                    className="flex-1"
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <Card className="p-6">
                <h2 className="mb-6">Confirm Booking</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4 pb-4 border-b border-border">
                    <ImageWithFallback
                      src={data.image}
                      alt={data.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p>{data.name}</p>
                      <p className="text-sm text-muted-foreground">{data.profession}</p>
                      <Badge variant="outline" className="mt-1">
                        Verified Professional
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span>{services.find((s) => s.id === selectedService)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{selectedDate?.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>
                        {services.find((s) => s.id === selectedService)?.duration}
                      </span>
                    </div>
                    {notes && (
                      <div>
                        <span className="text-muted-foreground block mb-1">Notes:</span>
                        <p className="text-sm">{notes}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1" size="lg">
                    Confirm Booking
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Summary Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6">
              <h3 className="mb-4">Booking Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-border">
                  <ImageWithFallback
                    src={data.image}
                    alt={data.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm">{data.name}</p>
                    <p className="text-xs text-muted-foreground">{data.profession}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span>
                      {selectedService
                        ? services.find((s) => s.id === selectedService)?.name
                        : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{selectedDate ? selectedDate.toLocaleDateString() : "-"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span>{selectedTime || "-"}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span>
                      $
                      {selectedService
                        ? services.find((s) => s.id === selectedService)?.price
                        : 0}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Service Fee:</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-border">
                    <span>Total:</span>
                    <span className="text-primary">
                      $
                      {selectedService
                        ? (services.find((s) => s.id === selectedService)?.price || 0) + 10
                        : 10}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

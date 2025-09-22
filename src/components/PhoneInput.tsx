
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}

const PhoneInput = ({ value, onChange, error, errorMessage }: PhoneInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState(value || "+45 ");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Ensure it always starts with +45
    if (!newValue.startsWith("+45")) {
      newValue = "+45 " + newValue.replace(/^\+?45?\s*/, "");
    }
    
    setPhoneNumber(newValue);
    onChange(newValue);
  };

  return (
    <div className="space-y-1.5">
      <Label htmlFor="phone">Telefonnummer</Label>
      <Input
        id="phone"
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="+45 12345678"
        className="w-full"
      />
      {error && errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default PhoneInput;

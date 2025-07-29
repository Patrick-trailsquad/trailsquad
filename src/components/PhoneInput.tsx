
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useEffect, useState } from "react";
import { getCountries, getCountryCallingCode, CountryCode } from "libphonenumber-js";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}

const PhoneInput = ({ value, onChange, error, errorMessage }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("DK");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const formatted = `+${getCountryCallingCode(countryCode)}${phoneNumber}`;
    onChange(formatted);
  }, [countryCode, phoneNumber, onChange]);

  useEffect(() => {
    // Parse initial value if provided
    if (value && !phoneNumber) {
      const numberWithoutCode = value.replace(/^\+\d+/, '');
      setPhoneNumber(numberWithoutCode);
    }
  }, [value, phoneNumber]);

  return (
    <div className="space-y-1.5">
      <Label htmlFor="phone">Phone Number</Label>
      <div className="flex gap-2">
        <Select value={countryCode} onValueChange={(value) => setCountryCode(value as CountryCode)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-white border rounded-md shadow-lg">
            {getCountries().map((country) => (
              <SelectItem key={country} value={country} className="hover:bg-gray-100">
                {country} (+{getCountryCallingCode(country)})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
          placeholder="Indtast telefonnummer"
          className="flex-1"
        />
      </div>
      {error && errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default PhoneInput;

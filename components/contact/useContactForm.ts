import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Не вдалося надіслати повідомлення");
      }
    } catch (error) {
      console.error("Помилка при відправці форми:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    submitted,
    error,
    handleInputChange,
    handleSubmit,
  };
};
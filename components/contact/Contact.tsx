import { FC } from "react";
import { useContactForm } from "@/components/contact/useContactForm";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const {
    formData,
    isLoading,
    submitted,
    error,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div id="contacts"  className="container text-white">
      <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
        {submitted ? (
          <p className="text-white text-lg">
            <span className="text-yellow-500"> Дякуємо!</span> Ваше повідомлення надіслано.
          </p>
        ) : error ? (
          <p className="text-red-600 text-lg">
            Щось пішло не так. Спробуйте ще раз.
          </p>
        ) : (
          <h3>
            <span className="text-yellow-500">Write</span> to us — we`&apos;`ll reply{" "}
            <span className="text-yellow-500">quickly!</span>
          </h3>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-style"
            placeholder="Enter your name"
            required
            disabled={isLoading}
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-style"
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input-style textarea-style"
            placeholder="Enter your message"
            rows={5}
            required
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="border w-full border-yellow-500 bg-yellow-500 rounded-md px-5 py-2 duration-300 font-bold hover:bg-transparent"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

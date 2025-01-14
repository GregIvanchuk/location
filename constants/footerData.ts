import { FooterData } from "@/types/footerDataType";

export const footerData: FooterData = {
  popularServices: [
    { name: "Google Translate", url: "https://translate.google.com" },
    { name: "DeepL Translator", url: "https://www.deepl.com" },
    { name: "Bing Translator", url: "https://www.bing.com/translator" },
    { name: "Reverso Translation", url: "https://www.reverso.net/text_translation.aspx?lang=EN" }
  ],
  contactInfo: [
    { type: "Email", value: "info@example.com", link: "mailto:info@example.com" },
    { type: "Phone", value: "+1 (234) 567-890", link: "tel:+1234567890" },
    { type: "Address", value: "123 Main Street, City, Country" }
  ],
  copyright: "&copy; 2024 Your Company Name. All rights reserved."
};

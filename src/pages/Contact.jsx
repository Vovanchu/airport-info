import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">Контакти</h2>
    <p className="mt-2 text-gray-600">Як зв’язатися з нами.</p>
    <form className="mt-4">
      <input type="text" placeholder="Ваше ім’я" className="p-2 border rounded w-full mb-2" />
      <input type="email" placeholder="Ваш email" className="p-2 border rounded w-full mb-2" />
      <textarea placeholder="Ваше повідомлення" className="p-2 border rounded w-full mb-2"></textarea>
      <Button className="w-full">Відправити</Button>
    </form>
  </div>
);

export default Contact;
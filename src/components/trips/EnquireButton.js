"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

export default function EnquireButton({ tripName, className = "" }) {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const { push } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = {};
    if (!String(data.get("name") || "").trim()) nextErrors.name = "Add the name we should ask for.";
    if (!String(data.get("phone") || "").trim()) nextErrors.phone = "A phone number lets us confirm dates.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setOpen(false);
    push({
      tone: "success",
      title: "Enquiry noted",
      description: `We will call you about ${tripName}. This desk preview does not send the form yet.`,
    });
    event.currentTarget.reset();
  }

  return (
    <>
      <Button className={className} onClick={() => setOpen(true)}>
        Enquire about this trip
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Plan ${tripName}`}
        description="Share a name and number. A planner will match hotels and dates to this route."
      >
        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <Input name="name" label="Full name" autoComplete="name" error={errors.name} placeholder="Your name" />
          <Input name="phone" label="Phone" type="tel" autoComplete="tel" error={errors.phone} placeholder="+91" />
          <Button type="submit" className="w-full">
            Request a callback
          </Button>
        </form>
      </Modal>
    </>
  );
}

"use client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Loading from "./shared/Loading";


const ContactMeForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        // console.log(data, emailjs);
        setIsLoading(true)
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                data,
                {publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string}
            );
            console.log("Send Sunccessfully");
        } catch (error) {
            console.error("Error sending email:", error);
        }
        finally{
            setIsLoading(false)
        }
    };

    return (
        <div>
            <h1 className="text-xl font-medium text-center">Contact Form</h1>
            <p className="text-center text-gray-600">
                Feel free to reach out to me using the contact form below.
            </p>
            <Form className="flex w-96 flex-col gap-3" onSubmit={handleFormSubmit}>
                {/* Name */}
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label className="text-white">Name</Label>
                    <Input placeholder="Enter Name" />
                    <FieldError />
                </TextField>

                {/* Email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white">Email</Label>
                    <Input placeholder="Your Email Address" />
                    <FieldError />
                </TextField>

                {/* Message */}
                <Label className="text-white">Your Message </Label>
                <TextArea
                    rows={6}
                    name="message"
                    placeholder="Your message"
                    required
                >
                </TextArea>

                {/* Submit and Reset button */}
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        {
                            isLoading? <Loading/> : "Submit"
                        }
                        
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>

        </div>
    );
};

export default ContactMeForm;
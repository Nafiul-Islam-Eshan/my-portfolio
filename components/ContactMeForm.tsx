"use client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    Spinner,
    TextArea,
    TextField,
    toast,
} from "@heroui/react";
import emailjs from "@emailjs/browser";
import { useState } from "react";


const ContactMeForm = () => {

    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        // console.log(data, emailjs);
        setIsLoading(true)
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                data,
                { publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string }
            );
            toast.success("Message sent successfully!", {
                description: "Thanks for reaching out. I'll get back to you soon.",

            });
            form.reset()
        }
        catch (error) {
            toast.danger("Failed to send message.", {
                description: "Something went wrong. Please try again.",
            });
            console.log(error);

        }
        finally {
            setIsLoading(false)
        }
    };

    return (
        <div id="contact" className="p-5 mx-auto">
            <h1 className="text-xl lg:text-2xl font-medium text-center">Let&apos;s Connect</h1>
            <p className="text-center text-gray-400">
                Feel free to reach out to me using the contact form below.
            </p>
            <Form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
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
                    <Button isDisabled={isLoading} type="submit" className="fill-none border-3 border-teal-500">
                        {
                            isLoading ?
                                <div className="flex gap-2">
                                    <Spinner color="current" />
                                    Sending...
                                </div>
                                :
                                <span className="flex gap-2"><Check /> Submit</span>
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
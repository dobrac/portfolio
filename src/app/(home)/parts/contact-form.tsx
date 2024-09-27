"use client"
import React from 'react';
import axios from 'axios';
import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../../components/ui/form";
import {Button} from "../../../components/ui/button";
import {Input} from "../../../components/ui/input";
import {Textarea} from "../../../components/ui/textarea";
import {toast} from "sonner";

const FORM_SPREE_URL = 'https://formspree.io/f/mqazrpnw'

const formSchema = z.object({
  _subject: z.string(),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _subject: "New message from dobrac.dev",
      email: "",
      message: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    await axios({
      method: 'POST',
      url: FORM_SPREE_URL,
      data: values,
    })
      .then(() => {
        form.reset()
        toast.success(
          'Thank you for contacting me, I\'ll answer as soon as possible.', {
            closeButton: true,
            className: 'group-[.toaster]:bg-green-700 group-[.toaster]:text-white',
          });
      })
      .catch((error) => {
        console.log(error)
        toast.error(error?.response?.data?.error ?? error?.message ?? 'An error occurred.', {
          closeButton: true,
          className: 'group-[.toaster]:bg-red-500 group-[.toaster]:text-white',
        });
      })
  }

  const sending = form.formState.isSubmitting

  return (
    <Section id="contact">
      <TypographyH2>Contact</TypographyH2>

      <div className="mt-5">
        <Form  {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Input type="hidden" name="_subject" value="New message from dobrac.dev"/>
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your email address for me to reply to.
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={sending}>{sending ? "Sending..." : "Send"}</Button>
          </form>
        </Form>
      </div>
    </Section>
  );
};
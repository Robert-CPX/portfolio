'use client'

import React from 'react'
import { useFormStatus } from "react-dom";
import Image from 'next/image'
import SectionHeader from './SectionHeader';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-toastify';

const Contact = () => {
  const { ref } = useSectionInView("Contact")
  const { pending } = useFormStatus();

  const handleEmailToMe = async (formData: any) => {
    const { error } = await sendEmail(formData);
    if (error) {
      toast('something went wrong, please try again later')
      return
    }
    toast('Email sent successfully')
  }

  return (
    <div id="contact" ref={ref} className='flex w-full flex-col items-center'>
      <div className='flex flex-col items-center gap-4'>
        <SectionHeader>Contact me</SectionHeader>
        <p className='text_dark200_light900'>Please contact me directly at <a href='mailto:hi@robbdev.xyz' className='underline'>hi@robbdev.xyz</a> or through this form.</p>
      </div>
      <form className='mt-8 flex w-full max-w-2xl flex-col gap-4' action={handleEmailToMe}>
        <input placeholder='Your email' className='h-[3.5rem] rounded-lg border px-4 py-2 outline-slate-200 dark:bg-slate-200 dark:focus:bg-white' name="email" />
        <textarea placeholder='Your message' className='h-[14rem] rounded-lg border px-4 py-2 outline-slate-200 dark:bg-slate-200 dark:focus:bg-white' name="message" />
        <div className='flex items-start'>
          <button type="submit" disabled={pending} className='flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-black text-slate-200 dark:bg-slate-800'>
            {pending ? "Sending..." : "Send"}
            <Image src="/send-email.svg" alt="Send email" width={18} height={18} className='invert' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact

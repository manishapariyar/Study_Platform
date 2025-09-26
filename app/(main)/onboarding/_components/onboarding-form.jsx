'use client'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { onboardingSchema } from "../../../../lib/schema"


const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const router = useRouter();
  const {
    register, handleSubmit, formState: { errors },
    setValue, watch

  } = useForm({
    resolver: zodResolver(onboardingSchema),
  })
  return (
    <div className="flex justify-center items-center bg-background "
    ><Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card></div>
  )
}

export default OnboardingForm
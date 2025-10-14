'use client'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
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
import { onboardingSchema } from "@/lib/schema"
import { updateUsers } from "@/actions/user";
import useFetch from "@/hooks/use-fetch"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"



const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const router = useRouter();
  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUsers);
  const {
    register, handleSubmit, formState: { errors },
    setValue, watch

  } = useForm({
    resolver: zodResolver(onboardingSchema),
  })
  const onSubmit = async (data) => {
    try {
      const formattedIndustry = `${data.industry} - ${data.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;;
      await updateUserFn({
        ...data,
        industry: formattedIndustry,
      })
    }
    catch (error) {
      console.error("Failed to update user:", error);

    }
  }

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateResult, updateLoading]);


  const watchIndustry = watch("industry");
  return (
    <div className="flex justify-center items-center bg-background flex-col "
    ><Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="text-4xl text-blue-700">Complete your profile</CardTitle>
          <CardDescription>Select your industry to get personalized career insights and recommendations.</CardDescription>

        </CardHeader>
        <CardContent>
          <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.industry && <p className="text-red-500 text-sm">{errors.industry.message}
              </p>}


            </div>
            {watchIndustry && (
              <div className="space-y-2">
                <Label htmlFor="subIndustry">Specialization</Label>
                <Select
                  onValueChange={(value) => setValue("subIndustry", value)}
                >
                  <SelectTrigger id="subIndustry">
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Specializations</SelectLabel>
                      {selectedIndustry?.subIndustries.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.subIndustry && (
                  <p className="text-sm text-red-500">
                    {errors.subIndustry.message}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience" type="number"
                min="0"
                max="50"
                placeholder="Enter your years of experience"
                {...register("experience")}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills" type="text"
                placeholder="e.g., JavaScript, Project Management"
                {...register("skills")}
              />
              <p className="text-sm text-muted-foreground">
                Please enter skills separated by commas (e.g., "JavaScript,
                Project Management").
              </p>
              {errors.skills && (
                <p className="text-sm text-red-500">
                  {errors.skills.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32"
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={updateLoading}>
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </CardContent>
      </Card></div >
  )
}

export default OnboardingForm
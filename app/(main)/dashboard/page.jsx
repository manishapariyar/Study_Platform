import React from 'react'
import { onboardUserStatus } from '../../../actions/user'
import { redirect } from "next/navigation"
const IndustryInsight
  = async () => {
    const { isOnbording } = await onboardUserStatus();
    if (!isOnbording) {
      redirect("/onboarding")
    }
    return (
      <div>IndustryInsight

      </div>
    )
  }

export default IndustryInsight

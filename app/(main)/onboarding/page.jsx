import { onboardUserStatus } from "../../../actions/user"
import { industries } from "../../../data/industires"
import OnboardingForm from "./_components/onboarding-form"

const OnboardingPage = async () => {
  const { isOnbording } = await onboardUserStatus();
  if (isOnbording) {
    redirect('/dashboard')
  }
  return (
    <mai>
      <OnboardingForm industries={industries} />
    </mai>
  )
}

export default OnboardingPage
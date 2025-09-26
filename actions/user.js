
'use server'

import { auth } from "@clerk/nextjs/server";
import { db } from "../lib/prisma";
import { DemandLevel } from "../lib/generated/prisma";

export async function updateUsers(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  })

  if (!user) throw new Error("User not found");
  try {
    const result = await db.$transaction(async (tx) => {
      //find if the industry exists
      let industryInsight = await tx.industryInsights.findUnique({
        where: { industry: data.industry },
      })
      if (!industryInsight) {
        industryInsight = await tx.industryInsights.create({
          data: {
            industry: data.industry,
            salaryRange: [],
            growthRate: 0,
            demandLevel: DemandLevel.MEDIUM,
            topSkills: [],
            marketOutLook: "Nuetral",
            keyTrends: [],
            recommendedSkills: [],
            nextUpdate: new Date(new Date().now + 7 * 24 * 60 * 60 * 1000), //one week from now
          },
        })
      }
      //update user with industry id
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: {
          industry: data.industry,
          experience: data.experience,
          bio: data.bio,
          skills: data.skills,
        }
      })
      return { updatedUser, industryInsight }

      //ifindustry does not exist , create it with default values-will replace it with ai later
    }, {
      timeout: 10000, // 10 seconds
    }
    );

    return result
  } catch (error) {
    console.error("Transaction failed: ", error);
    throw error;
  }
}


export async function onboardUserStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  })

  if (!user) throw new Error("User not found");
  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: {
        industry: true,
      },
    });
    return {
      isOnbording: !!user?.industry
    }
  } catch (error) {

    console.error("Transaction failed: ", error);
    throw error;

  }
}

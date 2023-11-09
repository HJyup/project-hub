import Link from "next/link";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/font/page-header";
import FeaturesCard, { cardsData } from "@/components/main/features-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <PageHeader>
        <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="inline font-normal">
            <b>v0.2 beta</b> in development
          </span>
        </span>
        <PageHeaderHeading>Project hub.</PageHeaderHeading>
        <PageHeaderDescription className="font-light">
          Streamline your projects, prioritise with precision, and amplify
          productivity -{" "}
          <span className="text-slate-600">all in a day's work</span>.
        </PageHeaderDescription>
        <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link
            href="./hub/projects"
            className={cn(buttonVariants(), "rounded-[6px]")}
          >
            Get Started
          </Link>
          <Link
            href="./hub/projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-[6px]",
            )}
          >
            Already have an account?
          </Link>
        </section>
      </PageHeader>
      <Separator className="m-5" />
      <div className="flex justify-between flex-wrap">
        {cardsData.map((card, index) => (
          <FeaturesCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            badge={<Badge {...card.badgeProps} />}
          />
        ))}
      </div>
    </main>
  );
}

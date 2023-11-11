import Link from "next/link";

import FeaturesCard, { cardsData } from "@/components/modules/features-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:p-16 p-2">
      <PageHeader>
        <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="inline font-normal">
            <b>v0.2 beta</b> in development
          </span>
        </span>
        <PageHeaderHeading>Project hub.</PageHeaderHeading>
        <PageHeaderDescription className="font-light text-xs md:text-xl">
          Streamline your projects, prioritise with precision, and amplify
          productivity -{" "}
          <span className="text-slate-600">all in a day's work</span>.
        </PageHeaderDescription>
        <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link
            href="hub/projects"
            className={cn(buttonVariants(), "rounded-[6px]")}
          >
            Get Started
          </Link>
        </section>
      </PageHeader>
      <div className="w-full flex flex-col flex-wrap lg:flex-row lg:mx-2 p-4">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full lg:w-1/3 mb-4 lg:px-2">
            <FeaturesCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              badge={<Badge {...card.badgeProps} />}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

"use client";
import { IEvent } from "@/lib/database/models/event.model";
import { SignedOut } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";

export const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, Tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <Button>
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>
        </>
      )}
    </div>
  );
};

import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(context: NextPageContext) {
   console.log(context)
   const session = await getServerSession(context.req, context.res, authOptions);
   console.log(session)
   if (!session) {
      return {
         redirect: {
            destination: '/',
            permanent: false,
         }
      }
   }

   return {
      props: {
         session
      }
   }
}

const Notifications = () => {
   return (
      <>
         <Header showBackArrow label="Notifications" />
         <NotificationsFeed />
      </>
   );
}

export default Notifications;

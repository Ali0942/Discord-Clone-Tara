'use client';

import React, { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";

export const ModalProvider =()=>{
    const [isMounted , setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[]);
    if(!isMounted){
        return null;
    }
    return(
        <>
        <CreateServerModal/>
        <InviteModal />
        <EditServerModal />
        <MembersModal />
        </>
    )
}
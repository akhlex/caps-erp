import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import * as React from "react";
import MyCalendar from "@/components/my-ui/My-Calendar";
import { db } from "@/server/db";
import { sessions } from "@/server/db/schema";


export default function SessionBooking() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardDescription>Register Number</CardDescription>
                    <CardTitle><Input defaultValue={""}/></CardTitle>
                    <CardDescription>Name</CardDescription>
                    <CardTitle><Input defaultValue={""}/></CardTitle>
                    <CardDescription>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Your Designation</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Student</DropdownMenuItem>
                                <DropdownMenuItem>Faculty</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardDescription>
                    <CardDescription>Email</CardDescription>
                    <CardTitle><Input defaultValue={""}/></CardTitle>
                    <CardDescription>Contact Number</CardDescription>
                    <CardTitle><Input defaultValue={""}/></CardTitle>
                    <CardDescription>Session Date</CardDescription>
                    <CardTitle>
                        <MyCalendar></MyCalendar>
                    </CardTitle>
                    <CardDescription>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Session Type</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Group Peer Training</DropdownMenuItem>
                                <DropdownMenuItem>One on One Peer Training</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardDescription>
                    <CardDescription>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Session Topic</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
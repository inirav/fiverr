"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useState } from "react"
import { Doc, Id } from "@/convex/_generated/dataModel"
// import { useApiMutation } from "@/hooks/use-api-mutation"
import { useRouter } from "next/navigation"
import { title } from "process"


interface CreateFormProps {
    username: string;
}

const CreateFormSchema = z.object({
    title: z.string()
            .min(20, { message: "Title must be 20 Chars."})
            .max(100, { message: "Title must not be more than 20 Chars."}),
    category: z.string({required_error: 'please select a category'}),
    subcategory: z.string({required_error: 'Please select a subcategory'})           
})

type CreateFormValues = z.infer<typeof CreateFormSchema>

const defaultValues: Partial<CreateFormValues> = {
    title: "",
}


export const CreateForm = (props: CreateFormProps) => {}
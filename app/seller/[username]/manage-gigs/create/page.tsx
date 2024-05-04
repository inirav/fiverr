import { CreateForm } from "./_components/create-form";


interface CreateGigProps {
    params: {
        username: string;
    }
}

export default function CreateGig({ params }: CreateGigProps) {
    return (
        <div className="flex justify-center">
            {/* <CreateForm username={params.username}></CreateForm> */}
        </div>
    )
}
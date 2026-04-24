// "use client";

// import { useRouter } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";

// type Props = {
//   id: string;
// };

// export default function NotePreview({ id }: Props) {
//   const router = useRouter();

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//     enabled: !!id,
//   });

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       onClick={() => router.back()}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: 20,
//           borderRadius: 8,
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button onClick={() => router.back()}>Close</button>

//         {isLoading && <p>Loading...</p>}
//         {isError && <p>Error loading note</p>}

//         {data && (
//           <>
//             <h2>{data.title}</h2>
//             <p>{data.content}</p>
//             <span>{data.tag}</span>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  return <NotePreview id={id} />;
}
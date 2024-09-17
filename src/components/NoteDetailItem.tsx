

type NoteDetailItemProps = {
    label: string
    data: string
}

export default function NoteDetailItem({label, data}: NoteDetailItemProps) {
  return (
    <>
    <div className="max-h-40 overflow-auto break-words">
    <p className="font-bold mb-3 text-gray-700 uppcercase"> {label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </p>
    </div>
    </>
  )
}

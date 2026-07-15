function Input() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[25.616px] w-full" data-name="input">
      <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[#131313] text-[27.324px] text-center whitespace-nowrap">Share your story here...</p>
    </div>
  );
}

export default function InputContainer() {
  return (
    <div className="content-stretch drop-shadow-[0px_3.415px_8.539px_rgba(0,0,0,0.3)] flex flex-col gap-[25.616px] items-center overflow-clip pb-[12.808px] pt-[29.885px] px-[12.808px] relative rounded-[38.424px] size-full" data-name="Input container">
      <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] h-[93.925px] leading-[0] not-italic relative shrink-0 text-[#131313] text-[0px] text-center w-[486.703px]">
        <span className="leading-[1.2] text-[27.324px]">{`Anonymously `}</span>
        <span className="font-['Archivo:Bold',sans-serif] font-bold leading-[1.2] text-[27.324px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          share how your privacy has been leaked for others to learn. This is your safe space!
        </span>
      </p>
      <Input />
    </div>
  );
}
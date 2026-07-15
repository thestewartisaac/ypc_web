import svgPaths from "./svg-xnk1c3x1j4";
import imgHeroImage from "./4004e0f31a09932151c9d23d0924d88bd99852f2.png";

function Logo() {
  return (
    <div className="h-[57.57px] relative shrink-0 w-[47.767px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.7668 57.5704">
        <g id="logo">
          <path d={svgPaths.p1e7d9e80} fill="var(--fill-0, white)" id="Logo shape" />
          <path d={svgPaths.p25536f00} fill="var(--fill-0, white)" id="Logo shape_2" />
          <path d={svgPaths.p22b368a} fill="var(--fill-0, white)" id="Logo shape_3" />
          <circle cx="9.46591" cy="10.3781" fill="var(--fill-0, white)" id="Ellipse 9" r="6.43155" />
          <circle cx="23.7634" cy="10.3781" fill="var(--fill-0, white)" id="Ellipse 10" r="6.43155" />
          <path d={svgPaths.p3ea2ff00} fill="var(--fill-0, white)" id="Logo shape_4" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="content-stretch flex gap-[10.332px] items-center relative shrink-0" data-name="Logo container">
      <Logo />
      <div className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <p className="mb-0 text-[26.863px] whitespace-pre">
          <span className="font-['Archivo:Black',sans-serif] font-black leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Youth Privacy
          </span>
          <span className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</span>
        </p>
        <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] text-[20.664px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>
          Community
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute left-[8.31px] size-[9.091px] top-[8.31px]" data-name="Content">
      <div className="absolute inset-[-7.07%_-7.07%_-5%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1888 10.1888">
          <g id="Content">
            <path d={svgPaths.pf419b00} id="Vector 2" stroke="var(--stroke-0, #131313)" strokeWidth="1.28571" />
            <path d={svgPaths.p3eb2f100} id="Rectangle 7" stroke="var(--stroke-0, #131313)" strokeWidth="1.28571" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.1)] content-stretch flex h-[97.195px] items-center justify-between left-[calc(50%+0.21px)] overflow-clip p-[18.598px] rounded-[20px] shadow-[0px_4.133px_33.476px_0px_rgba(0,0,0,0.1)] top-[44px] w-[1560.413px]" data-name="Navbar">
      <LogoContainer />
      <div className="bg-[#49d899] content-stretch flex gap-[5.357px] h-[60px] items-center justify-center px-[30px] py-[17.143px] relative rounded-[16px] shrink-0" data-name="Navbar cta">
        <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[17.143px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[0.9]">Visit our website</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[25.714px]" data-name="icon">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[25.616px] w-full" data-name="input">
      <p className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[#131313] text-[27.324px] text-center whitespace-nowrap">Share your story here...</p>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch drop-shadow-[0px_3.415px_8.539px_rgba(0,0,0,0.3)] flex flex-col gap-[25.616px] h-[388.508px] items-center left-[calc(50%-0.5px)] overflow-clip pb-[12.808px] pt-[29.885px] px-[12.808px] rounded-[38.424px] top-[480px] w-[707px]" data-name="Input container">
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

function HeroSection() {
  return (
    <div className="bg-[#07522e] h-[1204px] overflow-clip relative shrink-0 w-[1728px]" data-name="Hero section">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1373px] left-[calc(50%+0.5px)] top-[calc(50%-52.5px)] w-[1795px]" data-name="hero_image">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgHeroImage} />
      </div>
      <Navbar />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo_Black:Regular',sans-serif] leading-[0.8] left-[calc(50%-0.5px)] not-italic text-[128px] text-center text-white top-[206px] w-[1071px]">Privacy Leaked Stories</p>
      <InputContainer />
      <div className="absolute bg-[#ff7400] content-stretch flex gap-[7.321px] h-[82px] items-center justify-center left-[731px] px-[41px] py-[23.429px] rounded-[16px] top-[931px] w-[264px]" data-name="Navbar cta">
        <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[23.43px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[0.9]">Submit</p>
        </div>
      </div>
      <p className="-translate-x-1/2 [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[1.2] left-1/2 text-[36px] text-center text-white top-[1066px] underline whitespace-nowrap">Read other stories</p>
    </div>
  );
}

function VuesaxLinearAdd() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 18V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/add">
        <VuesaxLinearAdd />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Bold',sans-serif] font-bold leading-[1.3] min-w-px relative text-[24px] text-left text-white tracking-[-0.48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Is this actually 100% anonymous?
        </p>
        <Frame />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.3] relative shrink-0 w-[915px]">
      <p className="font-['Archivo:Bold',sans-serif] font-bold relative shrink-0 text-[#131313] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        What happens after I share my story?
      </p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] tracking-[-0.36px] w-full">Our team reviews it to make sure no personal info slipped through, then we push it to the public feed. Your experience becomes a lesson for the rest of the community to learn from.</p>
    </div>
  );
}

function VuesaxLinearMinus() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/minus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, #131313)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/minus">
        <VuesaxLinearMinus />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function VuesaxLinearAdd1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 18V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/add">
        <VuesaxLinearAdd1 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Bold',sans-serif] font-bold leading-[1.3] min-w-px relative text-[24px] text-left text-white tracking-[-0.48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          What if I accidentally include real names or details?
        </p>
        <Frame3 />
      </div>
    </div>
  );
}

function VuesaxLinearAdd2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d="M6 12H18" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 18V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/add">
        <VuesaxLinearAdd2 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Bold',sans-serif] font-bold leading-[1.3] min-w-px relative text-[24px] text-left text-white tracking-[-0.48px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Why do we need to read these leaked stories?
        </p>
        <Frame4 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[74px] items-center relative shrink-0 w-full" data-name="main content">
      <p className="[word-break:break-word] font-['Archivo:SemiBold',sans-serif] font-semibold leading-[normal] min-w-full relative shrink-0 text-[72px] text-center text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        FAQs
      </p>
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[1283px]" data-name="faq component">
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1283 1.00011">
              <line id="divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x1="4.37114e-08" x2="1283" y1="0.5" y2="0.500112" />
            </svg>
          </div>
        </div>
        <button className="cursor-pointer h-[110px] relative shrink-0 w-full" data-name="faq text">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[40px] py-[31px] relative size-full">
              <Frame6 />
            </div>
          </div>
        </button>
        <div className="backdrop-blur-[20px] bg-[#49d899] h-[165px] relative rounded-[24px] shrink-0 w-full" data-name="faq text">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
              <Frame5 />
            </div>
          </div>
        </div>
        <button className="cursor-pointer h-[110px] relative shrink-0 w-full" data-name="faq text">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[40px] py-[31px] relative size-full">
              <Frame7 />
            </div>
          </div>
        </button>
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1283 1.00011">
              <line id="divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x1="4.37114e-08" x2="1283" y1="0.5" y2="0.500112" />
            </svg>
          </div>
        </div>
        <button className="cursor-pointer h-[110px] relative shrink-0 w-full" data-name="faq text">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[40px] py-[31px] relative size-full">
              <Frame8 />
            </div>
          </div>
        </button>
        <div className="h-0 relative shrink-0 w-full" data-name="divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1283 1.00011">
              <line id="divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x1="4.37114e-08" x2="1283" y1="0.5" y2="0.500112" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <div className="bg-[#07522e] relative shrink-0 w-full" data-name="FaqSection">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[100px] pt-[150px] px-[100px] relative size-full">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[79.113px] relative shrink-0 w-[65.641px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.641 79.113">
        <g id="logo">
          <path d={svgPaths.p13d56c00} fill="var(--fill-0, #49D899)" id="Logo shape" />
          <path d={svgPaths.p39120f00} fill="var(--fill-0, #318DF8)" id="Logo shape_2" />
          <path d={svgPaths.p2b041d00} fill="var(--fill-0, #318DF8)" id="Logo shape_3" />
          <circle cx="13.0081" cy="14.2618" fill="var(--fill-0, #FFD512)" id="Ellipse 9" r="8.8382" />
          <circle cx="32.6561" cy="14.2618" fill="var(--fill-0, #EA520F)" id="Ellipse 10" r="8.8382" />
          <path d={svgPaths.p1dace00} fill="var(--fill-0, #318DF8)" id="Logo shape_4" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10.07px] items-center justify-center relative shrink-0" data-name="logo container">
      <Logo1 />
      <div className="[word-break:break-word] font-['Archivo_Black:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
        <p className="font-['Archivo:Black',sans-serif] font-black leading-[normal] mb-0 text-[26.181px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Youth Privacy
        </p>
        <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] text-[20.14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Community
        </p>
      </div>
    </div>
  );
}

function Twitter1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="twitter">
          <path clipRule="evenodd" d={svgPaths.p3fa7fa80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.pa2bff00} fill="var(--fill-0, #131313)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative rounded-[20px] shrink-0" data-name="Twitter">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Twitter1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Facebook1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook">
          <path d={svgPaths.p2067ad80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative rounded-[20px] shrink-0" data-name="Facebook">
      <div className="content-stretch flex items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Facebook1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function RemixIconsFillLogosInstagramFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remix-icons/fill/logos/instagram-fill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p35d17b00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative rounded-[20px] shrink-0" data-name="Instagram">
      <div className="content-stretch flex items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <RemixIconsFillLogosInstagramFill />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1049)" id="linkedin">
          <path d={svgPaths.p13132a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1049">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedinIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Linkedin icon">
      <Linkedin1 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative rounded-[20px] shrink-0" data-name="Linkedin">
      <div className="content-stretch flex items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <LinkedinIcon />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social media">
      <Twitter />
      <Facebook />
      <Instagram />
      <Linkedin />
    </div>
  );
}

function SubSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Sub section">
      <p className="[word-break:break-word] font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] text-center w-[804.474px]">YPC is where digital sovereignty meets youth culture. We are empowering 10 million young people to take absolute control of their data and embrace privacy as a lifestyle.</p>
      <SocialMedia />
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Top section">
      <LogoContainer1 />
      <SubSection />
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="absolute flex inset-[17.71%_26.04%_19.79%_23.76%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
        <div className="relative size-full" data-name="Arrow - Up">
          <div className="absolute inset-[-5%_-6.22%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.03267 11.0001">
              <g id="Arrow - Up">
                <path d="M4.5164 10.5V0.5" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p2f7d70c0} id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative rounded-[24px] shrink-0" data-name="Icon">
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[16px]" data-name="Back to top icon">
          <ArrowUp />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function BackToTopContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[141px]" data-name="Back to top container">
      <p className="[word-break:break-word] font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">Back to top</p>
      <Icon />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="bottom nav">
      <p className="[word-break:break-word] font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[18px] text-white whitespace-nowrap">© YPC® 2026. All Rights Reserved.</p>
      <BackToTopContainer />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="footer content">
      <TopSection />
      <BottomNav />
    </div>
  );
}

function DotPattern() {
  return (
    <div className="absolute h-[261px] left-0 top-[-93.24px] w-[1726px]" data-name="dot pattern">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1726 261">
        <g clipPath="url(#clip0_1_827)" id="dot pattern">
          <circle cx="3.32667" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3015" r="32.3267" />
          <circle cx="888.076" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3173" r="32.3267" />
          <circle cx="445.702" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3119" r="32.3267" />
          <circle cx="1379.6" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3174" r="32.3267" />
          <circle cx="3.32656" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3034" r="27.55" />
          <circle cx="888.076" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3175" r="27.55" />
          <circle cx="445.701" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3120" r="27.55" />
          <circle cx="1379.6" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3176" r="27.55" />
          <circle cx="3.32661" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3053" r="23.4175" />
          <circle cx="888.076" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3177" r="23.4175" />
          <circle cx="445.702" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3121" r="23.4175" />
          <circle cx="1379.6" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3178" r="23.4175" />
          <circle cx="3.3265" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3072" r="19.9049" />
          <circle cx="888.076" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3179" r="19.9049" />
          <circle cx="445.701" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3122" r="19.9049" />
          <circle cx="1379.6" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3180" r="19.9049" />
          <circle cx="3.32671" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3091" r="16.9191" />
          <circle cx="888.076" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3181" r="16.9191" />
          <circle cx="445.701" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3123" r="16.9191" />
          <circle cx="1379.6" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3182" r="16.9191" />
          <circle cx="3.32724" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3110" r="14.3813" />
          <circle cx="888.076" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3183" r="14.3813" />
          <circle cx="445.702" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3124" r="14.3813" />
          <circle cx="1379.6" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3184" r="14.3813" />
          <circle cx="52.4798" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3016" r="32.3267" />
          <circle cx="937.229" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3185" r="32.3267" />
          <circle cx="494.855" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3125" r="32.3267" />
          <circle cx="1330.45" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3186" r="32.3267" />
          <circle cx="52.4794" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3035" r="27.55" />
          <circle cx="937.229" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3187" r="27.55" />
          <circle cx="494.855" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3126" r="27.55" />
          <circle cx="1330.45" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3188" r="27.55" />
          <circle cx="52.4795" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3054" r="23.4175" />
          <circle cx="937.229" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3189" r="23.4175" />
          <circle cx="494.854" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3127" r="23.4175" />
          <circle cx="1330.45" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3190" r="23.4175" />
          <circle cx="52.4799" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3073" r="19.9049" />
          <circle cx="937.229" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3191" r="19.9049" />
          <circle cx="494.854" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3128" r="19.9049" />
          <circle cx="1330.45" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3192" r="19.9049" />
          <circle cx="52.4791" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3092" r="16.9191" />
          <circle cx="937.229" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3193" r="16.9191" />
          <circle cx="494.855" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3129" r="16.9191" />
          <circle cx="1330.45" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3194" r="16.9191" />
          <circle cx="52.4789" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3111" r="14.3813" />
          <circle cx="937.229" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3195" r="14.3813" />
          <circle cx="494.854" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3130" r="14.3813" />
          <circle cx="1330.45" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3196" r="14.3813" />
          <circle cx="101.632" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3017" r="32.3267" />
          <circle cx="986.382" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3197" r="32.3267" />
          <circle cx="544.007" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3131" r="32.3267" />
          <circle cx="1428.76" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3198" r="32.3267" />
          <circle cx="101.632" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3036" r="27.55" />
          <circle cx="986.383" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3199" r="27.55" />
          <circle cx="544.007" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3132" r="27.55" />
          <circle cx="1428.76" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3200" r="27.55" />
          <circle cx="101.632" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3055" r="23.4175" />
          <circle cx="986.383" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3201" r="23.4175" />
          <circle cx="544.007" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3133" r="23.4175" />
          <circle cx="1428.76" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3202" r="23.4175" />
          <circle cx="101.632" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3074" r="19.9049" />
          <circle cx="986.382" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3203" r="19.9049" />
          <circle cx="544.007" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3134" r="19.9049" />
          <circle cx="1428.76" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3204" r="19.9049" />
          <circle cx="101.632" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3093" r="16.9191" />
          <circle cx="986.382" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3205" r="16.9191" />
          <circle cx="544.007" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3135" r="16.9191" />
          <circle cx="1428.76" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3206" r="16.9191" />
          <circle cx="101.633" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3112" r="14.3813" />
          <circle cx="986.382" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3207" r="14.3813" />
          <circle cx="544.008" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3136" r="14.3813" />
          <circle cx="1428.76" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3208" r="14.3813" />
          <circle cx="150.785" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3018" r="32.3267" />
          <circle cx="1035.53" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3209" r="32.3267" />
          <circle cx="593.16" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3137" r="32.3267" />
          <circle cx="1477.91" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3210" r="32.3267" />
          <circle cx="150.785" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3037" r="27.55" />
          <circle cx="1035.53" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3211" r="27.55" />
          <circle cx="593.16" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3138" r="27.55" />
          <circle cx="1477.91" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3212" r="27.55" />
          <circle cx="150.785" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3056" r="23.4175" />
          <circle cx="1035.53" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3213" r="23.4175" />
          <circle cx="593.16" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3139" r="23.4175" />
          <circle cx="1477.91" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3214" r="23.4175" />
          <circle cx="150.785" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3075" r="19.9049" />
          <circle cx="1035.53" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3215" r="19.9049" />
          <circle cx="593.16" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3140" r="19.9049" />
          <circle cx="1477.91" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3216" r="19.9049" />
          <circle cx="150.785" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3094" r="16.9191" />
          <circle cx="1035.54" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3217" r="16.9191" />
          <circle cx="593.16" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3141" r="16.9191" />
          <circle cx="1477.91" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3218" r="16.9191" />
          <circle cx="150.785" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3113" r="14.3813" />
          <circle cx="1035.53" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3219" r="14.3813" />
          <circle cx="593.16" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3142" r="14.3813" />
          <circle cx="1477.91" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3220" r="14.3813" />
          <circle cx="199.938" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3019" r="32.3267" />
          <circle cx="1084.69" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3221" r="32.3267" />
          <circle cx="642.312" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3143" r="32.3267" />
          <circle cx="1527.06" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3222" r="32.3267" />
          <circle cx="199.938" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3038" r="27.55" />
          <circle cx="1084.69" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3223" r="27.55" />
          <circle cx="642.313" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3144" r="27.55" />
          <circle cx="1527.06" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3224" r="27.55" />
          <circle cx="199.938" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3057" r="23.4175" />
          <circle cx="1084.69" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3225" r="23.4175" />
          <circle cx="642.313" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3145" r="23.4175" />
          <circle cx="1527.06" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3226" r="23.4175" />
          <circle cx="199.938" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3076" r="19.9049" />
          <circle cx="1084.69" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3227" r="19.9049" />
          <circle cx="642.313" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3146" r="19.9049" />
          <circle cx="1527.06" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3228" r="19.9049" />
          <circle cx="199.937" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3095" r="16.9191" />
          <circle cx="1084.69" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3229" r="16.9191" />
          <circle cx="642.312" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3147" r="16.9191" />
          <circle cx="1527.06" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3230" r="16.9191" />
          <circle cx="199.938" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3114" r="14.3813" />
          <circle cx="1084.69" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3231" r="14.3813" />
          <circle cx="642.313" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3148" r="14.3813" />
          <circle cx="1527.06" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3232" r="14.3813" />
          <circle cx="249.09" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3020" r="32.3267" />
          <circle cx="1133.84" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3233" r="32.3267" />
          <circle cx="691.465" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3149" r="32.3267" />
          <circle cx="1576.21" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3234" r="32.3267" />
          <circle cx="249.09" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3039" r="27.55" />
          <circle cx="1133.84" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3235" r="27.55" />
          <circle cx="691.465" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3150" r="27.55" />
          <circle cx="1576.22" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3236" r="27.55" />
          <circle cx="249.091" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3058" r="23.4175" />
          <circle cx="1133.84" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3237" r="23.4175" />
          <circle cx="691.465" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3151" r="23.4175" />
          <circle cx="1576.21" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3238" r="23.4175" />
          <circle cx="249.09" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3077" r="19.9049" />
          <circle cx="1133.84" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3239" r="19.9049" />
          <circle cx="691.465" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3152" r="19.9049" />
          <circle cx="1576.21" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3240" r="19.9049" />
          <circle cx="249.091" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3096" r="16.9191" />
          <circle cx="1133.84" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3241" r="16.9191" />
          <circle cx="691.465" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3153" r="16.9191" />
          <circle cx="1576.22" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3242" r="16.9191" />
          <circle cx="249.09" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3115" r="14.3813" />
          <circle cx="1133.84" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3243" r="14.3813" />
          <circle cx="691.465" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3154" r="14.3813" />
          <circle cx="1576.22" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3244" r="14.3813" />
          <circle cx="298.243" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3021" r="32.3267" />
          <circle cx="1182.99" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3245" r="32.3267" />
          <circle cx="740.618" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3155" r="32.3267" />
          <circle cx="1625.37" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3246" r="32.3267" />
          <circle cx="298.243" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3040" r="27.55" />
          <circle cx="1182.99" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3247" r="27.55" />
          <circle cx="740.618" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3156" r="27.55" />
          <circle cx="1625.37" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3248" r="27.55" />
          <circle cx="298.243" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3059" r="23.4175" />
          <circle cx="1182.99" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3249" r="23.4175" />
          <circle cx="740.618" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3157" r="23.4175" />
          <circle cx="1625.37" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3250" r="23.4175" />
          <circle cx="298.244" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3078" r="19.9049" />
          <circle cx="1182.99" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3251" r="19.9049" />
          <circle cx="740.618" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3158" r="19.9049" />
          <circle cx="1625.37" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3252" r="19.9049" />
          <circle cx="298.243" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3097" r="16.9191" />
          <circle cx="1182.99" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3253" r="16.9191" />
          <circle cx="740.618" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3159" r="16.9191" />
          <circle cx="1625.37" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3254" r="16.9191" />
          <circle cx="298.243" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3116" r="14.3813" />
          <circle cx="1182.99" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3255" r="14.3813" />
          <circle cx="740.618" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3160" r="14.3813" />
          <circle cx="1625.37" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3256" r="14.3813" />
          <circle cx="347.397" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3022" r="32.3267" />
          <circle cx="1232.15" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3257" r="32.3267" />
          <circle cx="789.771" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3161" r="32.3267" />
          <circle cx="1674.52" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3258" r="32.3267" />
          <circle cx="347.396" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3041" r="27.55" />
          <circle cx="1232.15" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3259" r="27.55" />
          <circle cx="789.771" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3162" r="27.55" />
          <circle cx="1674.52" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3260" r="27.55" />
          <circle cx="347.396" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3060" r="23.4175" />
          <circle cx="1232.15" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3261" r="23.4175" />
          <circle cx="789.771" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3163" r="23.4175" />
          <circle cx="1674.52" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3262" r="23.4175" />
          <circle cx="347.396" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3079" r="19.9049" />
          <circle cx="1232.15" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3263" r="19.9049" />
          <circle cx="789.771" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3164" r="19.9049" />
          <circle cx="1674.52" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3264" r="19.9049" />
          <circle cx="347.396" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3098" r="16.9191" />
          <circle cx="1232.15" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3265" r="16.9191" />
          <circle cx="789.771" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3165" r="16.9191" />
          <circle cx="1674.52" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3266" r="16.9191" />
          <circle cx="347.396" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3117" r="14.3813" />
          <circle cx="1232.15" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3267" r="14.3813" />
          <circle cx="789.771" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3166" r="14.3813" />
          <circle cx="1674.52" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3268" r="14.3813" />
          <circle cx="396.549" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3023" r="32.3267" />
          <circle cx="1281.3" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3269" r="32.3267" />
          <circle cx="838.924" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3167" r="32.3267" />
          <circle cx="1723.67" cy="23.7366" fill="var(--fill-0, #07522E)" id="Ellipse 3270" r="32.3267" />
          <circle cx="396.549" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3042" r="27.55" />
          <circle cx="1281.3" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3271" r="27.55" />
          <circle cx="838.923" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3168" r="27.55" />
          <circle cx="1723.67" cy="83.6136" fill="var(--fill-0, #07522E)" id="Ellipse 3272" r="27.55" />
          <circle cx="396.549" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3061" r="23.4175" />
          <circle cx="1281.3" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3273" r="23.4175" />
          <circle cx="838.924" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3169" r="23.4175" />
          <circle cx="1723.67" cy="134.581" fill="var(--fill-0, #07522E)" id="Ellipse 3274" r="23.4175" />
          <circle cx="396.548" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3080" r="19.9049" />
          <circle cx="1281.3" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3275" r="19.9049" />
          <circle cx="838.924" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3170" r="19.9049" />
          <circle cx="1723.67" cy="177.903" fill="var(--fill-0, #07522E)" id="Ellipse 3276" r="19.9049" />
          <circle cx="396.549" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3099" r="16.9191" />
          <circle cx="1281.3" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3277" r="16.9191" />
          <circle cx="838.924" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3171" r="16.9191" />
          <circle cx="1723.67" cy="214.727" fill="var(--fill-0, #07522E)" id="Ellipse 3278" r="16.9191" />
          <circle cx="396.549" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3118" r="14.3813" />
          <circle cx="1281.3" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3279" r="14.3813" />
          <circle cx="838.924" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3172" r="14.3813" />
          <circle cx="1723.67" cy="246.028" fill="var(--fill-0, #07522E)" id="Ellipse 3280" r="14.3813" />
        </g>
        <defs>
          <clipPath id="clip0_1_827">
            <rect fill="white" height="261" width="1726" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#131313] h-[719px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end px-[120px] py-[100px] relative size-full">
          <FooterContent />
          <DotPattern />
        </div>
      </div>
    </div>
  );
}

export default function PrivacyLeaked() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Privacy leaked">
      <HeroSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
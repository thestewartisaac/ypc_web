import svgPaths from "./svg-lx8acukidb";

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

export default function Navbar() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-between overflow-clip p-[18.598px] relative rounded-[20px] shadow-[0px_4.133px_33.476px_0px_rgba(0,0,0,0.1)] size-full" data-name="Navbar">
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
import centerServices from "../../assets/images/center-services.png";
import whyChooseUsShapeRightTop from "../../assets/images/why-choose-us-shape-right-top.svg";
import ourServicesOilShape from "../../assets/images/our-services-oil-shape.svg";
import carOil from "../../assets/images/car-oil.png";
import carSuspens from "../../assets/images/car-suspens.png";
import carProg from "../../assets/images/car-program.png";
import ChooseUsGrid from "./ChooseUsGrid";

export default function CenterServices() {
    return (
        <div className="lg:pt-4 mb-12 lg:mb-25">
            <div className="main-container">
                <div className="text-center">
                    <h2 className="dm-sans-font text-secondary text-4xl font-bold">
                        Center services 
                    </h2>
                    <p  className="mx-auto dm-sans-font text-lg mt-8 text-gray-400 max-w-[680px]">
We pffer lots of cars maintenance services, nibh vitae eget ut. Integer amet scelerisque vitae massa. Facilisi tincidunt accumsan 
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-25">
                <ChooseUsGrid
                    mainImage={centerServices}
                    shapeImage={whyChooseUsShapeRightTop}
                    title="European vehicle maintenance"
                    description="Justo, nunc, dolor, non non. Molestie venenatis, neque, elementum sed laoreet. Velit sed facilisis lobortis integer at ame."
                >
                    <svg width="62" height="62" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.75 40.23C58.9016 39.8666 59.157 39.5561 59.4843 39.3373C59.8117 39.1185 60.1963 39.0011 60.59 39H62C62.5304 39 63.0391 38.7893 63.4142 38.4142C63.7893 38.0391 64 37.5304 64 37V29C64 28.4696 63.7893 27.9609 63.4142 27.5858C63.0391 27.2107 62.5304 27 62 27H60.59C60.1963 26.9989 59.8117 26.8815 59.4843 26.6627C59.157 26.4439 58.9016 26.1334 58.75 25.77L56.32 19.91C56.1681 19.5448 56.1279 19.1428 56.2044 18.7548C56.2809 18.3668 56.4708 18.0101 56.75 17.73L57.75 16.73C57.936 16.5443 58.0835 16.3237 58.1841 16.0809C58.2848 15.8381 58.3366 15.5778 58.3366 15.315C58.3366 15.0522 58.2848 14.7919 58.1841 14.5491C58.0835 14.3063 57.936 14.0857 57.75 13.9L52.09 8.23999C51.9043 8.05404 51.6837 7.90653 51.4409 7.80588C51.1981 7.70523 50.9378 7.65341 50.675 7.65341C50.4122 7.65341 50.1519 7.70523 49.9091 7.80588C49.6663 7.90653 49.4458 8.05404 49.26 8.23999L48.26 9.23999C47.9799 9.51918 47.6232 9.70905 47.2352 9.78558C46.8472 9.86212 46.4452 9.82192 46.08 9.67001L40.22 7.23999C39.8566 7.08841 39.5461 6.83296 39.3273 6.50565C39.1085 6.17833 38.9911 5.79371 38.99 5.39999V4C38.99 3.46957 38.7793 2.96086 38.4042 2.58578C38.0291 2.21071 37.5204 2 36.99 2H28.99C28.4596 2 27.9508 2.21071 27.5758 2.58578C27.2007 2.96086 26.99 3.46957 26.99 4V5.41C26.9888 5.80372 26.8715 6.18834 26.6527 6.51566C26.4339 6.84297 26.1234 7.09842 25.76 7.25L19.9 9.67999C19.5348 9.8319 19.1328 9.87213 18.7448 9.79559C18.3568 9.71906 18.0001 9.52919 17.72 9.25L16.72 8.25C16.5343 8.06405 16.3137 7.91654 16.0709 7.81589C15.8281 7.71524 15.5678 7.66342 15.305 7.66342C15.0422 7.66342 14.7819 7.71524 14.5391 7.81589C14.2963 7.91654 14.0758 8.06405 13.89 8.25L8.23001 13.91C8.04406 14.0957 7.89652 14.3163 7.79587 14.5591C7.69522 14.8019 7.64343 15.0622 7.64343 15.325C7.64343 15.5878 7.69522 15.8481 7.79587 16.0909C7.89652 16.3337 8.04406 16.5542 8.23001 16.74L9.23001 17.74C9.5092 18.0201 9.69907 18.3768 9.7756 18.7648C9.85214 19.1528 9.81191 19.5548 9.66 19.92L7.23001 25.78C7.07843 26.1434 6.82295 26.4539 6.49564 26.6727C6.16832 26.8915 5.78373 27.0089 5.39001 27.01H4C3.46957 27.01 2.96086 27.2207 2.58578 27.5958C2.21071 27.9709 2 28.4796 2 29.01V37.01C2 37.5404 2.21071 38.0492 2.58578 38.4242C2.96086 38.7993 3.46957 39.01 4 39.01H5.41C5.80372 39.0112 6.18834 39.1285 6.51566 39.3473C6.84297 39.5661 7.09842 39.8766 7.25 40.24L9.67999 46.1C9.8319 46.4652 9.87213 46.8672 9.79559 47.2552C9.71906 47.6432 9.52919 47.9999 9.25 48.28L8.25 49.28C8.06405 49.4657 7.91654 49.6863 7.81589 49.9291C7.71524 50.1719 7.66342 50.4322 7.66342 50.695C7.66342 50.9578 7.71524 51.2181 7.81589 51.4609C7.91654 51.7037 8.06405 51.9242 8.25 52.11L13.91 57.77C14.0957 57.9559 14.3163 58.1035 14.5591 58.2041C14.8019 58.3048 15.0622 58.3566 15.325 58.3566C15.5878 58.3566 15.8481 58.3048 16.0909 58.2041C16.3337 58.1035 16.5542 57.9559 16.74 57.77L17.74 56.77C18.0201 56.4908 18.3768 56.3009 18.7648 56.2244C19.1528 56.1479 19.5548 56.1881 19.92 56.34L25.78 58.77C26.1434 58.9216 26.4539 59.177 26.6727 59.5044C26.8915 59.8317 27.0089 60.2163 27.01 60.61V62C27.01 62.5304 27.2207 63.0391 27.5958 63.4142C27.9709 63.7893 28.4796 64 29.01 64H37.01C37.5404 64 38.0492 63.7893 38.4242 63.4142C38.7993 63.0391 39.01 62.5304 39.01 62V60.59C39.0112 60.1963 39.1285 59.8117 39.3473 59.4843C39.5661 59.157 39.8766 58.9016 40.24 58.75" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M41.0614 47.9998C38.0902 49.5912 34.713 50.2634 31.3588 49.931C28.0047 49.5986 24.8251 48.2767 22.224 46.1332C19.6228 43.9897 17.7176 41.1214 16.7503 37.8926C15.783 34.6638 15.7973 31.2204 16.7914 27.9998L25.6614 36.9998H31.0014L37.0014 30.9998V25.6898L28.1014 16.6898C31.3207 15.6975 34.7623 15.684 37.9893 16.6511C41.2164 17.6182 44.0833 19.5223 46.2262 22.1217C48.3691 24.7211 49.6915 27.8985 50.0253 31.2508C50.3592 34.603 49.6896 37.9789 48.1014 40.9498" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M49.6599 38.3398L61.4998 50.1898C62.999 51.69 63.8411 53.724 63.8411 55.8448C63.8411 57.9657 62.999 59.9997 61.4998 61.4998C59.9997 62.999 57.9657 63.8411 55.8448 63.8411C53.724 63.8411 51.69 62.999 50.1898 61.4998L38.3398 49.6599" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M55.5 59C57.433 59 59 57.433 59 55.5C59 53.567 57.433 52 55.5 52C53.567 52 52 53.567 52 55.5C52 57.433 53.567 59 55.5 59Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ChooseUsGrid>
                <ChooseUsGrid
                    mainImage={carOil}
                    shapeImage={ourServicesOilShape}
                    title="Car Oil Services"
                    description="Justo, nunc, dolor, non non. Molestie venenatis, neque, elementum sed laoreet. Velit sed facilisis lobortis integer at ame."
                    rowReverse={true}
                    classesShape="-top-25"
                >
                    <svg width="62" height="62" viewBox="0 0 56 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.8555 43C34.8555 44.8565 34.118 46.637 32.8052 47.9498C31.4925 49.2625 29.712 50 27.8555 50C25.999 50 24.2185 49.2625 22.9057 47.9498C21.593 46.637 20.8555 44.8565 20.8555 43C20.8555 39.13 27.8555 30 27.8555 30C27.8555 30 34.8555 39.13 34.8555 43Z" stroke="#12022F" strokeWidth="4" strokeLinejoin="round"/>
                        <path d="M50.8552 26V17.38C50.8547 16.6364 50.6884 15.9023 50.3684 15.2311C50.0484 14.5598 49.5827 13.9685 49.0052 13.5L36.2352 3.12C35.3421 2.39413 34.226 1.99855 33.0752 2H28.1552C27.433 1.99996 26.7193 2.15636 26.0634 2.45845C25.4074 2.76055 24.8246 3.20118 24.3552 3.75L19.8552 9H5.85518C5.05953 9 4.29647 9.31607 3.73386 9.87868C3.17125 10.4413 2.85518 11.2044 2.85518 12V57L2.58518 57.27C2.36178 57.4936 2.19455 57.767 2.09721 58.0677C1.99986 58.3684 1.97518 58.6879 2.02518 59L2.57518 62.32C2.654 62.7914 2.89904 63.219 3.26592 63.5254C3.63281 63.8317 4.09727 63.9965 4.57518 63.99H51.1652C51.6431 63.9965 52.1076 63.8317 52.4744 63.5254C52.8413 63.219 53.0864 62.7914 53.1652 62.32L53.7152 59C53.7668 58.6863 53.743 58.3649 53.6456 58.0623C53.5482 57.7597 53.3801 57.4847 53.1552 57.26L52.8552 57V37.84C52.8556 36.7423 52.5979 35.6598 52.1028 34.6801C51.6077 33.7004 50.8892 32.8508 50.0052 32.2L30.1252 17.56C28.7492 16.5459 27.0845 15.9992 25.3752 16H11.8552" stroke="#12022F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.8555 11L27.9655 9.34C28.2393 8.92776 28.6109 8.58968 29.0471 8.35588C29.4833 8.12208 29.9706 7.99982 30.4655 8H31.7655C32.4677 8.00144 33.1471 8.24915 33.6855 8.7L43.7755 17.1C44.1141 17.3821 44.3865 17.7353 44.5731 18.1345C44.7598 18.5338 44.8562 18.9693 44.8555 19.41V22" stroke="#12022F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.85547 6V4C5.85547 3.46957 6.06618 2.96086 6.44126 2.58578C6.81633 2.21071 7.32504 2 7.85547 2H13.8555C14.3859 2 14.8946 2.21071 15.2697 2.58578C15.6448 2.96086 15.8555 3.46957 15.8555 4V6" stroke="#12022F" strokeWidth="4" strokeLinejoin="round"/>
                        <path d="M2.85547 57H16.8555" stroke="#12022F" strokeWidth="4" strokeLinejoin="round"/>
                        <path d="M52.8555 57H38.8555" stroke="#12022F" strokeWidth="4" strokeLinejoin="round"/>
                    </svg>
                </ChooseUsGrid>
                 <ChooseUsGrid
                    mainImage={carSuspens}
                    shapeImage={whyChooseUsShapeRightTop}
                    title="Car Suspension"
                    description="Justo, nunc, dolor, non non. Molestie venenatis, neque, elementum sed laoreet. Velit sed facilisis lobortis integer at ame."
                >
                    <svg width="62" height="62" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.5702 27.5578L25.6502 44.2678C25.3992 44.4797 25.1088 44.6398 24.7957 44.7389C24.4825 44.8381 24.1529 44.8743 23.8257 44.8454C23.4985 44.8166 23.1803 44.7234 22.8893 44.571C22.5983 44.4187 22.3403 44.2103 22.1302 43.9578C21.7037 43.4511 21.4958 42.7957 21.552 42.1358C21.6083 41.4758 21.9241 40.8651 22.4302 40.4378L42.3502 23.7278C42.6012 23.516 42.8916 23.3559 43.2048 23.2567C43.5179 23.1576 43.8476 23.1214 44.1747 23.1502C44.5019 23.179 44.8202 23.2723 45.1111 23.4246C45.4021 23.577 45.6601 23.7854 45.8702 24.0378V24.0378C46.2967 24.5446 46.5047 25.1999 46.4484 25.8599C46.3922 26.5199 46.0763 27.1305 45.5702 27.5578V27.5578Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M38.5702 20.5578L18.6502 37.2678C18.3992 37.4797 18.1088 37.6398 17.7957 37.7389C17.4825 37.8381 17.1529 37.8743 16.8257 37.8454C16.4985 37.8166 16.1803 37.7234 15.8893 37.571C15.5983 37.4187 15.3403 37.2103 15.1302 36.9578V36.9578C14.7037 36.4511 14.4958 35.7957 14.552 35.1358C14.6083 34.4758 14.9241 33.8651 15.4302 33.4378L35.3502 16.7278C35.6012 16.516 35.8916 16.3559 36.2048 16.2567C36.5179 16.1576 36.8476 16.1214 37.1747 16.1502C37.5019 16.179 37.8202 16.2723 38.1111 16.4246C38.4021 16.577 38.6601 16.7854 38.8702 17.0378V17.0378C39.2967 17.5446 39.5047 18.1999 39.4484 18.8599C39.3922 19.5199 39.0763 20.1305 38.5702 20.5578V20.5578Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.5702 13.5578L11.6502 30.2678C11.3992 30.4797 11.1088 30.6398 10.7957 30.7389C10.4825 30.8381 10.1529 30.8743 9.82569 30.8454C9.4985 30.8166 9.18027 30.7234 8.88929 30.571C8.5983 30.4187 8.34032 30.2103 8.13022 29.9578V29.9578C7.70372 29.4511 7.49576 28.7957 7.55201 28.1358C7.60825 27.4758 7.9241 26.8651 8.43021 26.4378L28.3502 9.72783C28.6012 9.51598 28.8916 9.35587 29.2048 9.25674C29.5179 9.15761 29.8476 9.12141 30.1747 9.15023C30.5019 9.17904 30.8202 9.2723 31.1111 9.42464C31.4021 9.57697 31.6601 9.78537 31.8702 10.0378V10.0378C32.2967 10.5446 32.5047 11.1999 32.4484 11.8599C32.3922 12.5199 32.0763 13.1305 31.5702 13.5578V13.5578Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M53.5 57.498C55.7091 57.498 57.5 55.7072 57.5 53.498C57.5 51.2889 55.7091 49.498 53.5 49.498C51.2909 49.498 49.5 51.2889 49.5 53.498C49.5 55.7072 51.2909 57.498 53.5 57.498Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M52.55 43.5479L45.21 36.2079C45.117 36.1142 45.0064 36.0398 44.8846 35.989C44.7627 35.9382 44.632 35.9121 44.5 35.9121C44.368 35.9121 44.2373 35.9382 44.1154 35.989C43.9936 36.0398 43.883 36.1142 43.79 36.2079L42.5 37.4979L41.5 36.4979" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M33.5 38.498L37.5 42.498L36.21 43.788C36.1163 43.881 36.0419 43.9916 35.9911 44.1135C35.9404 44.2353 35.9142 44.366 35.9142 44.498C35.9142 44.6301 35.9404 44.7608 35.9911 44.8826C36.0419 45.0045 36.1163 45.1151 36.21 45.208L43.55 52.548" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 6.49805C10.0933 6.49805 10.6734 6.67399 11.1667 7.00364C11.6601 7.33328 12.0446 7.80182 12.2716 8.35C12.4987 8.89817 12.5581 9.50137 12.4424 10.0833C12.3266 10.6653 12.0409 11.1998 11.6213 11.6194C11.2017 12.0389 10.6672 12.3246 10.0853 12.4404C9.50332 12.5562 8.90014 12.4967 8.35196 12.2697C7.80378 12.0426 7.33523 11.6581 7.00558 11.1648C6.67594 10.6714 6.5 10.0914 6.5 9.49805" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5003 20.4984L12.0703 17.0684" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M43.9605 50.4985C43.2892 52.6335 43.3534 54.932 44.143 57.0261C44.9326 59.1202 46.4019 60.8889 48.3157 62.0492C50.2294 63.2095 52.4771 63.6942 54.699 63.4259C56.9209 63.1576 58.9886 62.1516 60.5711 60.5691C62.1536 58.9866 63.1595 56.9189 63.4278 54.697C63.6962 52.4752 63.2115 50.2275 62.0512 48.3137C60.8909 46.3999 59.1222 44.9307 57.028 44.1411C54.9339 43.3515 52.6355 43.2872 50.5005 43.9585" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 13.4982L17.06 12.0582C17.35 11.2358 17.4988 10.3702 17.5 9.49821C17.4996 7.73721 16.9182 6.02555 15.8459 4.62866C14.7736 3.23178 13.2703 2.22774 11.5692 1.77225C9.86817 1.31675 8.06435 1.43526 6.4375 2.1094C4.81064 2.78353 3.45168 3.97561 2.57135 5.50078C1.69102 7.02595 1.33854 8.79897 1.56854 10.5449C1.79854 12.2908 2.59819 13.912 3.84347 15.1572C5.08876 16.4023 6.71009 17.2018 8.45602 17.4316C10.202 17.6614 11.9749 17.3087 13.5 16.4282" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ChooseUsGrid>
                <ChooseUsGrid
                    mainImage={carProg}
                    shapeImage={whyChooseUsShapeRightTop}
                    title="Car Programing Services"
                    description="Justo, nunc, dolor, non non. Molestie venenatis, neque, elementum sed laoreet. Velit sed facilisis lobortis integer at ame."
                    rowReverse={true}
                >
                    <svg width="62" height="62" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54 10H12C10.8954 10 10 10.8954 10 12V54C10 55.1046 10.8954 56 12 56H54C55.1046 56 56 55.1046 56 54V12C56 10.8954 55.1046 10 54 10Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M41 21H25C22.7909 21 21 22.7909 21 25V41C21 43.2091 22.7909 45 25 45H41C43.2091 45 45 43.2091 45 41V25C45 22.7909 43.2091 21 41 21Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M33 2V6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M40 2V6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M47 2V6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26 2V6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 2V6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M33 60V64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M40 60V64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M47 60V64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26 60V64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 60V64" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M64 33H60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M64 40H60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M64 47H60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M64 26H60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M64 19H60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 33H2" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 40H2" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 47H2" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 26H2" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 19H2" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ChooseUsGrid>
            </div>
        </div>
    );
}
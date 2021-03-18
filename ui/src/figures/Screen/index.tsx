import React from 'react'
import { ScreenBg } from './ScreenBg'
import ScreenBody from './ScreenBody'
import ScreenHeader from './ScreenHeader'

import './screens.scss'

export function Screen() {
  return (
    <div className="screen margins">
      {/* <ScreenBg />
      <ScreenHeader />
      <ScreenBody /> */}
      <svg width="712" height="428" viewBox="0 0 712 428" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H702.411C707.176 0 711.041 3.0651 711.041 6.8461V421.035C711.041 424.816 707.176 427.881 702.411 427.881H8.00002C3.58174 427.881 0 424.299 0 419.881V8Z"
          opacity="0.4"
          fill="#DFE9FE"
        />
        <path
          d="M36.2153 18.1697C36.2153 16.0125 34.3763 14.2637 32.1077 14.2637C29.8391 14.2637 28 16.0125 28 18.1697C28 20.327 29.8391 22.0758 32.1077 22.0758C34.3763 22.0758 36.2153 20.327 36.2153 18.1697Z"
          fill="#EB6A5D"
        />
        <path
          d="M50.5923 18.1697C50.5923 16.0125 48.7532 14.2637 46.4846 14.2637C44.216 14.2637 42.377 16.0125 42.377 18.1697C42.377 20.327 44.216 22.0758 46.4846 22.0758C48.7532 22.0758 50.5923 20.327 50.5923 18.1697Z"
          fill="#F3BE4F"
        />
        <path
          d="M64.9692 18.1697C64.9692 16.0125 63.1302 14.2637 60.8616 14.2637C58.593 14.2637 56.7539 16.0125 56.7539 18.1697C56.7539 20.327 58.593 22.0758 60.8616 22.0758C63.1302 22.0758 64.9692 20.327 64.9692 18.1697Z"
          fill="#64C354"
        />
        <path
          d="M665.855 18.487C666.007 18.4829 666.146 18.4292 666.259 18.3135L669.562 15.0985C669.657 15.0075 669.709 14.8918 669.709 14.7555C669.709 14.4827 669.484 14.2637 669.197 14.2637C669.058 14.2637 668.923 14.3174 668.823 14.4125L665.859 17.3093L662.887 14.4125C662.787 14.3216 662.656 14.2637 662.513 14.2637C662.226 14.2637 662 14.4827 662 14.7555C662 14.8918 662.052 15.0075 662.148 15.0985L665.455 18.3135C665.572 18.4292 665.703 18.487 665.855 18.487Z"
          fill="#555ABF"
        />
        <path
          d="M159.958 58.6289H26.6514C25.4427 58.6289 24.4629 59.5607 24.4629 60.71V64.4827C24.4629 65.6321 25.4427 66.5638 26.6514 66.5638H159.958C161.167 66.5638 162.147 65.6321 162.147 64.4827V60.71C162.147 59.5607 161.167 58.6289 159.958 58.6289Z"
          fill="#32325D"
        />
        <path
          d="M158.495 169.788H25.1885C23.9798 169.788 23 170.719 23 171.869V175.641C23 176.791 23.9798 177.723 25.1885 177.723H158.495C159.704 177.723 160.684 176.791 160.684 175.641V171.869C160.684 170.719 159.704 169.788 158.495 169.788Z"
          fill="#32325D"
        />
        <path
          d="M156.495 281.045H23.1885C21.9798 281.045 21 281.977 21 283.127V286.899C21 288.049 21.9798 288.98 23.1885 288.98H156.495C157.704 288.98 158.684 288.049 158.684 286.899V283.127C158.684 281.977 157.704 281.045 156.495 281.045Z"
          fill="#32325D"
        />
        <path
          d="M86.2487 77.1436H26.6514C25.4427 77.1436 24.4629 78.0753 24.4629 79.2247V82.9974C24.4629 84.1467 25.4427 85.0785 26.6514 85.0785H86.2487C87.4573 85.0785 88.4372 84.1467 88.4372 82.9974V79.2247C88.4372 78.0753 87.4573 77.1436 86.2487 77.1436Z"
          fill="#32325D"
        />
        <path
          d="M84.7858 188.302H25.1885C23.9798 188.302 23 189.234 23 190.383V194.156C23 195.305 23.9798 196.237 25.1885 196.237H84.7858C85.9945 196.237 86.9743 195.305 86.9743 194.156V190.383C86.9743 189.234 85.9945 188.302 84.7858 188.302Z"
          fill="#32325D"
        />
        <path
          d="M82.7858 299.56H23.1885C21.9798 299.56 21 300.492 21 301.641V305.414C21 306.563 21.9798 307.495 23.1885 307.495H82.7858C83.9945 307.495 84.9743 306.563 84.9743 305.414V301.641C84.9743 300.492 83.9945 299.56 82.7858 299.56Z"
          fill="#32325D"
        />
        <path
          d="M152.411 95.6582H25.8536C25.0855 95.6582 24.4629 96.2503 24.4629 96.9807C24.4629 97.7111 25.0855 98.3032 25.8536 98.3032H152.411C153.179 98.3032 153.802 97.7111 153.802 96.9807C153.802 96.2503 153.179 95.6582 152.411 95.6582Z"
          fill="#B2BACB"
        />
        <path
          d="M150.948 206.817H24.3907C23.6227 206.817 23 207.409 23 208.139C23 208.87 23.6227 209.462 24.3907 209.462H150.948C151.716 209.462 152.339 208.87 152.339 208.139C152.339 207.409 151.716 206.817 150.948 206.817Z"
          fill="#B2BACB"
        />
        <path
          d="M148.948 318.075H22.3907C21.6227 318.075 21 318.667 21 319.397C21 320.128 21.6227 320.72 22.3907 320.72H148.948C149.716 320.72 150.339 320.128 150.339 319.397C150.339 318.667 149.716 318.075 148.948 318.075Z"
          fill="#B2BACB"
        />
        <path
          d="M119.034 108.884H25.8536C25.0855 108.884 24.4629 109.476 24.4629 110.206C24.4629 110.937 25.0855 111.529 25.8536 111.529H119.034C119.802 111.529 120.424 110.937 120.424 110.206C120.424 109.476 119.802 108.884 119.034 108.884Z"
          fill="#B2BACB"
        />
        <path
          d="M117.571 220.042H24.3907C23.6227 220.042 23 220.635 23 221.365C23 222.095 23.6227 222.687 24.3907 222.687H117.571C118.339 222.687 118.961 222.095 118.961 221.365C118.961 220.635 118.339 220.042 117.571 220.042Z"
          fill="#B2BACB"
        />
        <path
          d="M115.571 331.3H22.3907C21.6227 331.3 21 331.892 21 332.623C21 333.353 21.6227 333.945 22.3907 333.945H115.571C116.339 333.945 116.961 333.353 116.961 332.623C116.961 331.892 116.339 331.3 115.571 331.3Z"
          fill="#B2BACB"
        />
        <path
          d="M135.722 122.108H25.8536C25.0855 122.108 24.4629 122.7 24.4629 123.43C24.4629 124.161 25.0855 124.753 25.8536 124.753H135.722C136.49 124.753 137.113 124.161 137.113 123.43C137.113 122.7 136.49 122.108 135.722 122.108Z"
          fill="#B2BACB"
        />
        <path
          d="M134.259 233.267H24.3907C23.6227 233.267 23 233.859 23 234.589C23 235.319 23.6227 235.912 24.3907 235.912H134.259C135.027 235.912 135.65 235.319 135.65 234.589C135.65 233.859 135.027 233.267 134.259 233.267Z"
          fill="#B2BACB"
        />
        <path
          d="M132.259 344.524H22.3907C21.6227 344.524 21 345.117 21 345.847C21 346.577 21.6227 347.169 22.3907 347.169H132.259C133.027 347.169 133.65 346.577 133.65 345.847C133.65 345.117 133.027 344.524 132.259 344.524Z"
          fill="#B2BACB"
        />
        <path d="M146.922 32.5522H711.041V32.8778H146.922V32.5522Z" fill="white" fill-opacity="0.2" />
        <path
          d="M691.182 20.9154C693.646 20.9154 695.68 18.9814 695.68 16.6425C695.68 14.3035 693.642 12.3696 691.178 12.3696C688.718 12.3696 686.689 14.3035 686.689 16.6425C686.689 18.9814 688.723 20.9154 691.182 20.9154ZM691.182 20.0641C689.188 20.0641 687.593 18.5392 687.593 16.6425C687.593 14.7457 689.188 13.225 691.178 13.225C693.173 13.225 694.776 14.7457 694.781 16.6425C694.785 18.5392 693.177 20.0641 691.182 20.0641ZM691.087 17.4649C691.326 17.4649 691.478 17.3326 691.491 17.1631C691.491 17.1467 691.491 17.1301 691.495 17.1136C691.508 16.9029 691.66 16.7582 691.943 16.5846C692.373 16.3201 692.647 16.0805 692.647 15.6052C692.647 14.9152 691.995 14.5226 691.222 14.5226C690.478 14.5226 689.97 14.8449 689.835 15.2292C689.809 15.3036 689.792 15.3739 689.792 15.4482C689.792 15.6466 689.957 15.7747 690.157 15.7747C690.413 15.7747 690.47 15.6507 690.604 15.5102C690.744 15.3036 690.926 15.1838 691.182 15.1838C691.526 15.1838 691.752 15.3697 691.752 15.6466C691.752 15.8987 691.569 16.035 691.2 16.2747C690.891 16.4813 690.665 16.692 690.665 17.0639V17.1094C690.665 17.3449 690.817 17.4649 691.087 17.4649ZM691.078 18.7335C691.356 18.7335 691.587 18.5434 691.587 18.2789C691.587 18.0144 691.361 17.8243 691.078 17.8243C690.796 17.8243 690.565 18.0186 690.565 18.2789C690.565 18.5392 690.796 18.7335 691.078 18.7335Z"
          fill="#555ABF"
        />
        <path
          d="M675.5 125H224.5C213.178 125 204 128.382 204 132.555V389.409C204 393.581 213.178 396.963 224.5 396.963H675.5C686.822 396.963 696 393.581 696 389.409V132.555C696 128.382 686.822 125 675.5 125Z"
          opacity="0.8"
          fill="#82A8FF"
        />
        <path
          d="M361.5 302.822H243.5C242.119 302.822 241 303.887 241 305.2C241 306.513 242.119 307.577 243.5 307.577H361.5C362.881 307.577 364 306.513 364 305.2C364 303.887 362.881 302.822 361.5 302.822Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M306.5 315.184H244.5C243.119 315.184 242 316.248 242 317.561C242 318.874 243.119 319.939 244.5 319.939H306.5C307.881 319.939 309 318.874 309 317.561C309 316.248 307.881 315.184 306.5 315.184Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M336.571 330.399H243.391C242.623 330.399 242 330.991 242 331.721C242 332.452 242.623 333.044 243.391 333.044H336.571C337.339 333.044 337.961 332.452 337.961 331.721C337.961 330.991 337.339 330.399 336.571 330.399Z"
          fill="white"
          fill-opacity="0.3"
        />
        <path
          d="M263.908 356.981C263.908 351.228 259.003 346.564 252.954 346.564C246.904 346.564 242 351.228 242 356.981C242 362.733 246.904 367.397 252.954 367.397C259.003 367.397 263.908 362.733 263.908 356.981Z"
          fill="white"
          fill-opacity="0.7"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M644 201.153C662.225 201.153 677 187.239 677 170.076C677 152.913 662.225 139 644 139C625.775 139 611 152.913 611 170.076C611 187.239 625.775 201.153 644 201.153ZM645.5 158.978C628.61 165.394 628.4 174.587 645.395 180.772C614.2 176.793 613.978 161.791 645.5 158.978ZM641.028 188.237C659.872 177.666 659.802 162.156 640.783 151.914C674.54 161.398 674.374 175.556 641.028 188.237Z"
          fill="white"
        />
        <path
          d="M435.853 154.479H244.147C242.409 154.479 241 155.818 241 157.471V162.897C241 164.55 242.409 165.89 244.147 165.89H435.853C437.591 165.89 439 164.55 439 162.897V157.471C439 155.818 437.591 154.479 435.853 154.479Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M376.495 179.203H243.189C241.98 179.203 241 180.134 241 181.284V185.056C241 186.206 241.98 187.138 243.189 187.138H376.495C377.704 187.138 378.684 186.206 378.684 185.056V181.284C378.684 180.134 377.704 179.203 376.495 179.203Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M335.486 56H214.514C210.364 56 207 58.8974 207 62.4715V96.1236C207 99.6977 210.364 102.595 214.514 102.595H335.486C339.636 102.595 343 99.6977 343 96.1236V62.4715C343 58.8974 339.636 56 335.486 56Z"
          fill="#555ABF"
          fill-opacity="0.43"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M230.693 92.3537C238.255 92.3537 244.385 86.5241 244.385 79.3332C244.385 72.1423 238.255 66.313 230.693 66.313C223.131 66.313 217 72.1423 217 79.3332C217 86.5241 223.131 92.3537 230.693 92.3537Z"
          fill="white"
          fill-opacity="0.1"
          stroke="white"
          stroke-opacity="0.3"
          stroke-width="0.821532"
        />
        <path
          d="M295.734 82.2422H252.621C251.853 82.2422 251.23 82.8343 251.23 83.5647C251.23 84.2951 251.853 84.8872 252.621 84.8872H295.734C296.502 84.8872 297.125 84.2951 297.125 83.5647C297.125 82.8343 296.502 82.2422 295.734 82.2422Z"
          fill="white"
          fill-opacity="0.3"
        />
        <path
          d="M317.98 87.4917H252.942C251.997 87.4917 251.23 88.2204 251.23 89.1192C251.23 90.0181 251.997 90.7468 252.942 90.7468H317.98C318.925 90.7468 319.691 90.0181 319.691 89.1192C319.691 88.2204 318.925 87.4917 317.98 87.4917Z"
          fill="black"
          fill-opacity="0.2"
        />
        <path
          d="M291.964 88.1426H252.941C252.374 88.1426 251.914 88.5798 251.914 89.1191C251.914 89.6584 252.374 90.0956 252.941 90.0956H291.964C292.531 90.0956 292.991 89.6584 292.991 89.1191C292.991 88.5798 292.531 88.1426 291.964 88.1426Z"
          fill="#5DDBF9"
          stroke="black"
          stroke-opacity="0.05"
          stroke-width="0.247119"
        />
        <path
          d="M293.907 67.7867C293.979 67.5279 294.008 67.2282 294.008 66.9694C294.008 65.3894 292.817 64.5586 291.068 64.5586C289.476 64.5586 288.243 65.4167 287.884 67.1874L286.407 74.4062H287.798L288.745 69.7889H292.616L292.846 68.6039H288.988L289.247 67.3099C289.462 66.2339 290.135 65.7572 291.01 65.7572C291.971 65.7572 292.631 66.1794 292.631 67.1193C292.631 67.2827 292.616 67.5142 292.53 67.7867H293.907ZM295.933 67.6777H294.557L293.897 70.8785C293.84 71.1509 293.797 71.4778 293.797 71.7911C293.797 73.6163 295.202 74.5833 297.052 74.5833C298.945 74.5833 300.35 73.5482 300.766 71.5187L301.554 67.6777H300.178L299.403 71.3961C299.131 72.7309 298.27 73.3847 297.109 73.3847C295.962 73.3847 295.187 72.7582 295.187 71.6685C295.187 71.4233 295.231 71.1509 295.259 71.0147L295.933 67.6777ZM307.203 74.4062H308.58L309.239 71.2054C309.297 70.933 309.34 70.6061 309.34 70.2928C309.34 68.4677 307.92 67.5006 306.085 67.5006C304.178 67.5006 302.787 68.5358 302.371 70.5652L301.582 74.4062H302.959L303.733 70.6879C304.005 69.353 304.866 68.6992 306.027 68.6992C307.174 68.6992 307.949 69.3258 307.949 70.4154C307.949 70.6606 307.906 70.933 307.877 71.0692L307.203 74.4062ZM313.913 74.5833C315.734 74.5833 317.24 73.5618 317.785 71.9681H316.409C315.95 72.8535 315.075 73.3847 314.028 73.3847C312.58 73.3847 311.72 72.5266 311.72 71.3552C311.72 69.9387 312.824 68.6992 314.387 68.6992C315.534 68.6992 316.337 69.2577 316.595 70.1158H318C317.742 68.4949 316.279 67.5006 314.473 67.5006C312.15 67.5006 310.328 69.2441 310.328 71.4506C310.328 73.2213 311.734 74.5833 313.913 74.5833Z"
          fill="#FCFCFC"
        />
        <path
          d="M259.655 67.8595C259.655 68.9628 259.287 69.7974 258.553 70.3632C257.828 70.9197 256.835 71.1978 255.574 71.1978H254.442V74.4655H252V64.6626H255.247C256.676 64.6626 257.768 64.9314 258.523 65.4689C259.277 65.997 259.655 66.7939 259.655 67.8595ZM257.153 67.8595C257.153 66.8316 256.532 66.3176 255.291 66.3176H254.442V69.5286H255.41C255.966 69.5286 256.393 69.3919 256.691 69.1184C256.999 68.845 257.153 68.4253 257.153 67.8595Z"
          fill="#FCFCFC"
        />
        <path
          d="M262.875 72.5838C262.875 72.8967 262.933 73.1208 263.048 73.2561C263.173 73.383 263.355 73.4464 263.596 73.4464C263.809 73.4464 264.028 73.383 264.25 73.2561C264.473 73.1208 264.655 72.939 264.798 72.7106V67.9793H266.908V74.7148H265.065L264.971 73.9284C264.74 74.2497 264.428 74.4992 264.036 74.6768C263.645 74.8459 263.231 74.9304 262.795 74.9304C262.127 74.9304 261.619 74.7486 261.272 74.385C260.934 74.013 260.765 73.4971 260.765 72.8375V67.9793H262.875V72.5838ZM274.18 67.7764C274.608 67.7764 274.999 67.844 275.356 67.9793L274.968 70.7953H273.633V69.5649C273.241 69.6241 272.894 69.8228 272.591 70.161C272.289 70.4993 272.053 70.9263 271.884 71.4422V73.3703H273.286V74.7148H268.839V73.3703H269.774V69.3112H268.839V67.9793H271.389L271.763 69.4888C272.022 68.9137 272.346 68.4867 272.738 68.2076C273.13 67.9201 273.611 67.7764 274.18 67.7764ZM278.609 71.9369C278.742 72.9601 279.312 73.4717 280.318 73.4717C280.923 73.4717 281.529 73.2857 282.134 72.9136L282.976 74.0045C282.629 74.292 282.214 74.5203 281.734 74.6894C281.253 74.8501 280.723 74.9304 280.145 74.9304C279.352 74.9304 278.68 74.7825 278.128 74.4865C277.576 74.1821 277.158 73.7635 276.873 73.2307C276.597 72.6895 276.459 72.0637 276.459 71.3534C276.459 70.6769 276.592 70.068 276.859 69.5268C277.135 68.9772 277.532 68.5459 278.048 68.233C278.573 67.9117 279.196 67.751 279.918 67.751C280.594 67.751 281.182 67.8905 281.68 68.1696C282.179 68.4402 282.562 68.8376 282.829 69.3619C283.105 69.8778 283.243 70.4951 283.243 71.2139C283.243 71.4929 283.229 71.734 283.203 71.9369H278.609ZM279.918 69.0955C279.535 69.0955 279.228 69.2309 278.996 69.5015C278.765 69.7636 278.627 70.1695 278.582 70.7192H281.186C281.169 69.6368 280.746 69.0955 279.918 69.0955Z"
          fill="#FCFCFC"
        />
        <rect x="354" y="56" width="342" height="46.5951" rx="8" fill="#555ABF" fill-opacity="0.43" />
        <path
          d="M404.224 64.5586H363.189C361.98 64.5586 361 65.4903 361 66.6397V66.6397C361 67.7891 361.98 68.7208 363.189 68.7208H404.224C405.432 68.7208 406.412 67.7891 406.412 66.6397C406.412 65.4903 405.432 64.5586 404.224 64.5586Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M455.571 74.0107H362.391C361.623 74.0107 361 74.6028 361 75.3332C361 76.0636 361.623 76.6557 362.391 76.6557H455.571C456.339 76.6557 456.961 76.0636 456.961 75.3332C456.961 74.6028 456.339 74.0107 455.571 74.0107Z"
          fill="white"
          fill-opacity="0.3"
        />
      </svg>
    </div>
  )
}
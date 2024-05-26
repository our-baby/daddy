// icon.tsx
import { ReactElement } from 'react';

// 사용할 icon 이름들
export type iconName =
  | 'tag_all'
  | 'tag_pregnancy'
  | 'tag_birth'
  | 'tag_parenting'
  | 'tag_policy'
  | 'tag_health';

type icon = {
  content: Array<ReactElement>;
  viewBox: string;
};

// icon의 path와 viewbox
const IconSet: Record<iconName, icon> = {
  tag_all: {
    content: [
      <path
        key="1"
        d="M0.79 0.54c-0.03 0 -0.055 -0.025 -0.055 -0.055V0.138c0 -0.03 0.025 -0.055 0.055 -0.055h0.355c0.03 0 0.055 0.025 0.055 0.055v0.348c0 0.03 -0.025 0.055 -0.055 0.055z"
      />,
      <path
        key="2"
        d="m0.943 0.745 -0.205 0.223c-0.013 0.013 -0.013 0.033 0 0.048l0.205 0.223c0.013 0.015 0.038 0.015 0.05 0l0.205 -0.223c0.013 -0.013 0.013 -0.033 0 -0.048l-0.205 -0.223c-0.013 -0.015 -0.035 -0.015 -0.05 0"
      />,
      <path
        key="3"
        cx="13"
        cy="39.4"
        r="9.3"
        d="M0.557 0.985A0.233 0.233 0 0 1 0.325 1.218A0.233 0.233 0 0 1 0.092 0.985A0.233 0.233 0 0 1 0.557 0.985z"
      />,
      <path
        key="4"
        d="M0.12 0.163 0.3 0.06c0.017 -0.01 0.038 -0.01 0.053 0l0.177 0.102c0.017 0.01 0.028 0.028 0.028 0.048v0.205c0 0.02 -0.01 0.038 -0.028 0.048l-0.177 0.102c-0.017 0.01 -0.038 0.01 -0.053 0l-0.18 -0.102c-0.017 -0.01 -0.028 -0.028 -0.028 -0.048V0.21c0 -0.02 0.01 -0.038 0.028 -0.048"
      />,
    ],
    viewBox: '0 0 1.3 1.3',
  },
  tag_pregnancy: {
    content: [
      <path
        key="1"
        d="M7.5 0a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 1 1 0 -3.75M4.688 14.961A1.252 1.252 0 0 1 3.75 13.75v-2.152l-0.179 0.297c-0.355 0.59 -1.125 0.782 -1.715 0.426s-0.782 -1.125 -0.426 -1.715l2.278 -3.79a3.765 3.765 0 0 1 2.683 -1.781c0.16 -0.023 0.32 -0.04 0.488 -0.04H7.5c0.054 0 0.109 0.004 0.16 0.012a3.12 3.12 0 0 1 2.816 2.54l0.238 1.27a3.75 3.75 0 0 1 3.035 3.684v1.25c0 0.692 -0.559 1.25 -1.25 1.25h-2.188v3.75c0 0.692 -0.559 1.25 -1.25 1.25s-1.25 -0.559 -1.25 -1.25v-3.75h-0.625v3.75c0 0.692 -0.559 1.25 -1.25 1.25S4.686 19.442 4.686 18.75z"
      />,
    ],
    viewBox: '0 0 15 20',
  },
  tag_birth: {
    content: [
      <path
        key="1"
        d="M0.4 0.125c-0.087 0 -0.175 0.046 -0.175 0.15s0.088 0.15 0.175 0.15 0.175 -0.046 0.175 -0.15 -0.088 -0.15 -0.175 -0.15m-0.05 0.15a0.025 0.025 0 1 1 0 -0.05 0.025 0.025 0 0 1 0 0.05m0.1 0a0.025 0.025 0 1 1 0 -0.05 0.025 0.025 0 0 1 0 0.05m0.25 0.1c0 0.221 -0.121 0.425 -0.3 0.425 -0.091 0 -0.167 -0.053 -0.22 -0.134 0.26 -0.053 0.347 -0.241 0.351 -0.249l0.004 -0.009C0.575 0.379 0.6 0.333 0.6 0.275c0 -0.11 -0.09 -0.175 -0.2 -0.175s-0.2 0.065 -0.2 0.175 0.09 0.175 0.2 0.175c0.034 0 0.066 -0.006 0.094 -0.018 -0.033 0.052 -0.129 0.174 -0.327 0.212l0 0C0.124 0.569 0.1 0.474 0.1 0.375 0.1 0.154 0.221 0.025 0.4 0.025s0.3 0.129 0.3 0.35"
      />,
    ],
    viewBox: '0 0 0.8 0.8',
  },
  tag_parenting: {
    content: [
      <path
        key="1"
        d="M0.18 0.378a0.045 0.045 0 0 0 0.006 0.022H0.046a0.032 0.032 0 0 1 -0.032 -0.032v-0.048A0.079 0.079 0 0 1 0.094 0.242h0.137a0.08 0.08 0 0 0 0.014 0.027 0.078 0.078 0 0 0 -0.065 0.077zM0.165 0.218a0.081 0.081 0 1 1 0.081 -0.081A0.081 0.081 0 0 1 0.165 0.218m0.245 0.16a0.022 0.022 0 0 1 -0.022 0.022H0.225a0.022 0.022 0 0 1 -0.022 -0.022V0.346a0.055 0.055 0 0 1 0.055 -0.055h0.098a0.055 0.055 0 0 1 0.055 0.055zm-0.048 -0.159a0.056 0.056 0 1 1 -0.056 -0.056 0.056 0.056 0 0 1 0.056 0.056"
      />,
    ],
    viewBox: '-0.025 0 0.475 0.475',
  },
  tag_policy: {
    content: [
      <path
        key="1"
        d="M0.547 0.1H0.196A0.047 0.047 0 0 0 0.15 0.148v0.605A0.047 0.047 0 0 0 0.196 0.8h0.509A0.047 0.047 0 0 0 0.75 0.752V0.298ZM0.525 0.325V0.146L0.708 0.325Z"
      />,
    ],
    viewBox: '0 0 0.9 0.9',
  },
  tag_health: {
    content: [
      <path
        key="1"
        d="M18.688 10.938c-0.125 -0.188 -0.313 -0.313 -0.563 -0.313 -1.375 0 -2.688 0.625 -3.5 1.75l-0.563 0.75c-0.688 0.813 -1.75 1.25 -2.813 1.25h-1.875c-0.375 0 -0.625 -0.25 -0.625 -0.625s0.25 -0.625 0.625 -0.625h1.188c1 0 1.938 -0.813 1.938 -1.813V11.25c0 -0.313 -0.313 -0.625 -0.625 -0.625h-3.813c-2.25 0 -4.063 1 -5.063 2.625l-1.688 2.625c-0.125 0.188 -0.125 0.438 0 0.625l1.875 3.125c0.063 0.125 0.25 0.25 0.375 0.313h0.125c0.125 0 0.25 -0.063 0.375 -0.125 2.375 -1.563 5.125 -2.375 7.938 -2.375 2.063 0 3.938 -1.125 4.938 -2.938l1.688 -3c0.125 -0.125 0.125 -0.375 0.063 -0.563"
      />,
      <path
        key="2"
        d="M8.063 9.375H11.875c1 0 1.875 0.813 1.875 1.813v0.125l3.875 -4a4 4 0 0 0 0 -5.563C16.875 1.063 15.938 0.625 14.938 0.625s-2 0.438 -2.75 1.188l-0.313 0.313 -0.313 -0.313C10.813 1.063 9.875 0.625 8.813 0.625c-1 0 -1.938 0.438 -2.688 1.188a4 4 0 0 0 0 5.563zM8.75 5.625h1l1.063 -1.063q0.188 -0.188 0.563 -0.188c0.188 0.063 0.375 0.188 0.438 0.313l0.625 1.25 0.75 -1.813c0.063 -0.188 0.25 -0.375 0.5 -0.375s0.438 0.063 0.563 0.25l1.25 1.875c0.188 0.313 0.125 0.688 -0.188 0.875s-0.688 0.125 -0.875 -0.188l-0.563 -0.875 -0.813 2c-0.063 0.25 -0.313 0.438 -0.563 0.438q-0.375 0 -0.563 -0.375l-0.875 -1.75 -0.625 0.625c-0.125 0.188 -0.25 0.25 -0.438 0.25h-1.25c-0.375 0 -0.625 -0.25 -0.625 -0.625s0.25 -0.625 0.625 -0.625"
      />,
    ],
    viewBox: '0 0 20 20',
  },
};

interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => (
  <svg
    height={size}
    viewBox={IconSet[icon].viewBox}
    fill={color}
    xmlns="http://www.w3.org/2000/svg">
    {IconSet[icon].content.map((el) => el)}
  </svg>
);
export default Icon;

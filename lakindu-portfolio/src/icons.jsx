import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiPhp, SiLaravel, SiFlask, SiMysql, SiFlutter, SiDart, SiPython, SiChartdotjs, SiFigma, SiGit, SiJira } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbApi, TbBrain } from 'react-icons/tb'

const ICONS = {
  html: [SiHtml5, '#E34F26'], css: [SiCss, '#2D8CE8'], javascript: [SiJavascript, '#F7DF1E'], react: [SiReact, '#61DAFB'],
  tailwind: [SiTailwindcss, '#38BDF8'], php: [SiPhp, '#8993BE'], laravel: [SiLaravel, '#FF2D20'], flask: [SiFlask, '#E8E8F0'],
  mysql: [SiMysql, '#5B9BD5'], flutter: [SiFlutter, '#54C5F8'], dart: [SiDart, '#2BB7F6'], python: [SiPython, '#5B9BD5'],
  chartjs: [SiChartdotjs, '#FF6384'], figma: [SiFigma, '#F24E1E'], git: [SiGit, '#F05032'], jira: [SiJira, '#2684FF'],
  vscode: [VscVscode, '#2FA3F2'], rest: [TbApi, '#8d9bff'], ml: [TbBrain, '#ff5fa2'],
}
const ALIAS = {
  'react.js': 'react', 'tailwind css': 'tailwind', 'rest api': 'rest', 'rest apis': 'rest', 'restful apis': 'rest',
  'machine learning': 'ml', 'applied ml / ai': 'ml', 'laravel blade': 'laravel', 'laravel / blade': 'laravel',
  'chart.js': 'chartjs', 'vs code': 'vscode',    'ui/ux': 'figma',
}
export const iconFor = (name) => { const k = name.toLowerCase(); return ICONS[ALIAS[k] || k] }

export function TechChip({ name, small }) {
  const m = iconFor(name), I = m && m[0]
  return <span className={'tchip' + (small ? ' sm' : '')}>{I && <span className="ico" style={{ color: m[1] }}><I /></span>}{name}</span>
}

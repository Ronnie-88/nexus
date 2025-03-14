import CPlusPlusIcon from "../icons/cplusplusicon";
import CSharpIcon from "../icons/csharpicon";
import CssIcon from "../icons/cssicon";
import ExpressIcon from "../icons/expressicon";
import GitIcon from "../icons/giticon";
import HtmlIcon from "../icons/htmlicon";
import JavaIcon from "../icons/javaicon";
import JavascriptIcon from "../icons/javascripticon";
import NodeIcon from "../icons/nodeicon";
import ReactIcon from "../icons/reacticon";
import TypescriptIcon from "../icons/typescripticon";
import UnityIcon from "../icons/unityicon";
import UnrealEngineIcon from "../icons/unrealengineicon";

export default function ToolsAndTechSection() {
  return (
    <section className="text-white px-96 my-10">
      <h1 className="text-5xl my-5">Tools and Tech</h1>
      <ul className="bg-[#007acc] rounded-2xl my-5 grid grid-cols-[repeat(auto-fit,minmax(112px,1fr))] p-2 max-w-3xl">
        <li>
          <CPlusPlusIcon />
        </li>
        <li>
          <CSharpIcon />
        </li>
        <li>
          <JavaIcon />
        </li>
        <li>
          <TypescriptIcon />
        </li>
        <li>
          <JavascriptIcon />
        </li>
        <li>
          <HtmlIcon />
        </li>
        <li>
          <CssIcon />
        </li>
        <li>
          <UnrealEngineIcon />
        </li>
        <li>
          <UnityIcon />
        </li>
        <li>
          <GitIcon />
        </li>
        <li>
          <ReactIcon />
        </li>
        <li>
          <ExpressIcon />
        </li>
        <li>
          <NodeIcon />
        </li>
      </ul>
    </section>
  );
}

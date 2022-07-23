import branchesInfo from "./branchesInfo";
import { FcManager } from "react-icons/fc";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
export default function Branch() {
  return (
    <div className="branches">
      <div className="container">
        <div className="branches-wrapper">
          {branchesInfo.map((branch) => (
            <div className="branch-item" key={branch.title}>
              <div
                className="branch-header"
                style={{ backgroundColor: `${branch.backColor}` }}
              >
                شعبه {branch.title}
              </div>
              <div className="branch-body">
                <ul>
                  <li>
                    <i>
                      <AiOutlinePhone />
                    </i>
                    {branch.phoneNumber}
                  </li>
                  <li>
                    <i>
                      <GoLocation />
                    </i>
                    {branch.address}
                  </li>
                  <li>
                    <i>
                      <FcManager />
                    </i>
                    {branch.manager}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

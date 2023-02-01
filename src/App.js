import Navbar from "./components/navbar";
import { useStaffingPlan } from "./components/reducers/staffingPlan.reducer";
import StaffingHelper from "./pages/staffingHelper";

function App() {
  const [state, dispatch] = useStaffingPlan();

  return (
    <div className="container mx-auto">
      <Navbar state={state} />
      <StaffingHelper state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

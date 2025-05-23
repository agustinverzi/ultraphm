import { Grid } from "@mui/material";

import Gauge from "@/components/charts/Gauge";
import InfoCard from "@/components/dashboard/InfoCard";

export default function Cards() {
  // Render
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
        <Gauge title="Adult Preventative Health" value={32.3} target={70.0} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
        <Gauge title="Peds Preventative Health" value={60.3} target={70.0} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
        <InfoCard title="Patients to Contact" value={47} note="Transition of Care" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
        <InfoCard title="Open Care Gaps" value={124} note="18 high priority" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}>
        <InfoCard title="Open HCCs" value={86} note="Needs documentation" />
      </Grid>
    </Grid>
  );
}
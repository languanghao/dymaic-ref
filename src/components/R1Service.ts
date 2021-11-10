import R1 from '@/components/R1.vue'
import { ReportProcessor } from '@/components/ReportService'

export class R1Report implements ReportProcessor {
    name = 'r1'

    component = R1
}

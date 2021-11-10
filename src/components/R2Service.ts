import { ReportProcessor } from '@/components/ReportService'
import R2 from '@/components/R2.vue'

export class R2Report implements ReportProcessor {
    name = 'r2'

    component = R2
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITaxes } from '../taxes.model';
import { TaxesService } from '../service/taxes.service';

@Component({
  standalone: true,
  templateUrl: './taxes-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class TaxesDeleteDialogComponent {
  taxes?: ITaxes;

  protected taxesService = inject(TaxesService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.taxesService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}

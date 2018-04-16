import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeestructureService } from './feestructure.service';

@Component({
  selector: 'app-feestructure',
  templateUrl: './feestructure.component.html',
  styleUrls: ['./feestructure.component.css']
})
export class FeestructureComponent implements OnInit {
  feeStructureForm: FormGroup;
  errorMsg; 
  successMsg;
  fee_structure_data: any;
  p: number = 1;
  showSettingNav: boolean = false;
  constructor(private FeeServices: FeestructureService) { }
  ngOnInit() {

      this.FeeServices.getAllFeeStructure()
                             // .map(resp = resp.json())
                              .subscribe(fee_structure_data =>  this.fee_structure_data = fee_structure_data);

      this.feeStructureForm = new FormGroup(
        {
          item_name: new FormControl('', [Validators.required]),
          item_amount: new FormControl('', [Validators.required]),
          _id: new FormControl('',[])
        }

    )
  }
  saveFeeStructure() {
    let formData = this.feeStructureForm.value;
    this.FeeServices.saveFeeStructure(formData)
      .subscribe((res: Response) => {
        this.successMsg =  'Records updated successfully.';
        this.feeStructureForm.reset;
        this.ngOnInit();
      }, 
      error => {
        this.errorMsg = error;
      });
  }
  // get fee structure by ID
  getFeeStructureById(feeStr)
  {
    //this.feeStructureForm.setValue({fee_item_name:feeStr.item_name, fee_item_cost: feeStr.item_amount});
    this.feeStructureForm.setValue(feeStr);
  }

  deleteFeeStructureById(feeStr)
  {
    let formData = {_id: feeStr._id, is_deleted: true};
    this.FeeServices.deleteFeeStructure(formData)
      .subscribe((res: Response) => {
        this.successMsg =  'Record deleted successfully.';
        this.feeStructureForm.reset;
        this.ngOnInit();
      }, 
      error => {
        this.errorMsg = error;
      });
  }
}

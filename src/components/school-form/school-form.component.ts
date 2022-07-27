import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SchoolService } from 'src/services/school.service';
import { School } from '../../models/School';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.sass']
})
export class SchoolFormComponent implements OnInit {
  private addressId: string;

  @Output() showUpdateModal = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private schoolService: SchoolService) { }

  SchoolForm = this.formBuilder.group({
    schoolName: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(null, ),
    city: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    email: new FormControl(''),
    addressId: new FormControl('')
  });

  ngOnInit(): void {
    this.schoolService.getSchoolInformation("").subscribe((response: any) => {
      const {name, address, id} = response.data;
      const {address1, address2, postalCode, city, province} = response.data.address;
      this.addressId = response.data.address.id;
      this.SchoolForm.patchValue({schoolName: name, addressId: this.addressId, address1: address1, address2: address2, city: city, postalCode: postalCode, province: province});
    });
  }

  onSubmit(form: any)
  {
    const {schoolName, address1, address2, city, postalCode, province, addressId} = form.value
    let updateSchoolInfo = new School();

    updateSchoolInfo.Id = "a0694c99-bbe6-42f4-88d5-13ebe5baa849";
    updateSchoolInfo.Name = schoolName;
    updateSchoolInfo.Address1 = address1;
    updateSchoolInfo.Address2 = address2;
    updateSchoolInfo.City = city;
    updateSchoolInfo.PostalCode = postalCode;
    updateSchoolInfo.Province = province;

    this.schoolService.updateSchoolInformation({...updateSchoolInfo, addressId: addressId}).subscribe((response: any) => {
      const {name, address, id} = response.data;
      const {address1, address2, postalCode, city, province} = response.data.address;
      this.SchoolForm.patchValue({schoolName: name, addressId: this.addressId, address1: address1, address2: address2, city: city, postalCode: postalCode, province: province});
      this.showUpdateModal.emit(true);
    });
  }
}

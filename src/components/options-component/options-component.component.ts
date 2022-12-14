import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivityService } from 'src/services/activity.service';
import { activity } from '../../models/activity';

@Component({
  selector: 'app-options-component',
  templateUrl: './options-component.component.html',
  styleUrls: ['./options-component.component.sass']
})


export class OptionsComponentComponent implements OnInit {
  data: activity[]
  @Output() PassSelectedActivity = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private activityService: ActivityService) { }
  activitySelectionForm = this.formBuilder.group({
    activityId: new FormControl(null),
  });

  ngOnInit(): void {
    this.activityService.GetActivityList().subscribe((response: any) => {
      this.data = response.data
    },
    (e) => {
      console.log(e);
    });
  }

  onSubmit(data: any)
  {
    const {activityId} = data.form.value;
    this.PassSelectedActivity.emit(activityId);
  }

}

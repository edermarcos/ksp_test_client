import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataServiceFactory } from '../../common/services/data-service.factory';
import { DataService } from '../../common/services/data.service';
import { IEmployee, IResponse } from '../../common/interfaces';

declare var bootstrap: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  private dataService: DataService;
  entities: IEmployee[] = [];
  entity: Partial<IEmployee> = {};
  formValue: any;
  form: FormGroup;
  modalComponent: any;
  isEditing: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dataServiceFactory: DataServiceFactory) {
    this.dataService = dataServiceFactory.create('employees');
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      position: ['', Validators.required],
      salary: [10000, Validators.required],
      status: ['active', Validators.required],
    });
    this.formValue = this.form.value;
  }

  ngOnInit(): void {
    this.getEmployees();
    this.modalComponent = new bootstrap.Modal(
      document.getElementById('employeeModal'),
      {},
    );
  }

  openModal(id: string = ''): void {
    this.entity = id ? this.entities.find(e => e.id === id) || this.formValue : this.formValue;
    this.isEditing = !!id;

    this.form.reset(this.entity);
    this.modalComponent.show();
  }

  async submit(): Promise<void> {
    if (this.isEditing) {
      await this.updateEmployee();
    } else {
      await this.setEmployee();
    }

    await this.getEmployees();
    this.modalComponent.hide();
  }

  async getEmployees(): Promise<void> {
    try {
      const res: IResponse | any = await this.dataService.getAll().toPromise();
      this.entities = res.entities;
    } catch (e) {
      console.log(e);
    }
  }

  async setEmployee(): Promise<void> {
    await this.dataService.save(this.form.value).toPromise()
  }

  async updateEmployee(): Promise<void> {
    const { id } = this.entity;
    await this.dataService.update(this.form.value, id || '').toPromise()
  }

  async deleteEmployee(id: string): Promise<void> {
    await this.dataService.delete(id).toPromise();
    this.getEmployees();
  }
}

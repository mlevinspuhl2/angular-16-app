import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  category: Category

  constructor(public CategoryService: CategoryService, private route: ActivatedRoute) {
    this.category = {
      id: this.route.snapshot.params['id'],
      name: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.CategoryService.show(this.route.snapshot.params['id']).then(({ data }) => {
      this.category = data
    }).catch(error => { return error })

  }
}

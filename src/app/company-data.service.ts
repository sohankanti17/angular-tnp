import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDataService {
  private companies: {
    id: string
    name: string,
    postsCount: number
  }[];

  private companiesData: {
    id: string,
    name: string,
    placedStudentsCount: number,
    posts: {
      title: string,
      author: string,
      postUrl: string,
      postedOn: string,
      commentsCount: number
    }[],
  }

  constructor() { }

  getCompanies(){
    setTimeout(function() {
      return this.companies;
    }, 1000);
  }

  getCompanyData(id: string){
    setTimeout(function(){
      return this.companiesData.filter(function(company){
        return company.id === id;
      })
    }, 1000);
  }
}
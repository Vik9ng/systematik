---
title: "Scaffolding"
date: 2018-02-09T11:51:24+01:00
draft: False
---

På dette tema er der lagt et flexboxgrid system ind. på list.html er gridded sat op således:

<div class="row center-xs">
    <div class="col-xs-12 col-md-8">
        <div class="box">
              </div>
        </div>
    </div>
</div>


    <div class="row center-xs">
          <div class="col-xs-12 col-sm-7">
                <section>{{.Content}}</section>
          </div>
          <div class="col-xs-12 col-sm-4">
                <section>{{ .Params.facts}}</section>
          </div>
      </div>

# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-25 06:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_auto_20161124_1637'),
    ]

    operations = [
        migrations.CreateModel(
            name='reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review_id', models.CharField(blank=True, max_length=25, null=True)),
                ('review', models.TextField(blank=True, null=True)),
            ],
        ),
    ]

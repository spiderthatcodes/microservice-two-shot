# Generated by Django 4.0.3 on 2023-10-16 17:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BinVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('closet_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Shoes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manufacturer', models.CharField(max_length=200)),
                ('model_name', models.CharField(max_length=200)),
                ('color', models.CharField(max_length=100)),
                ('image', models.URLField()),
                ('bin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shoes', to='shoes_rest.binvo')),
            ],
        ),
    ]

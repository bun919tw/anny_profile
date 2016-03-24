from django.shortcuts import render


def index(request):
    return render(request, "web/index.html")

def design_group(request, design_group):
    context = {'design_group': design_group}
    return render(request, "web/design_group.html", context)

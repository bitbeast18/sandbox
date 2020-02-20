c.NotebookApp.allow_origin = '*'
c.NotebookApp.token = ''
c.NotebookApp.tornado_settings = {
    "headers": {
        "Content-Security-Policy": "frame-ancestors localhost:*; report-uri /api/security/csp-report"
    }
}
